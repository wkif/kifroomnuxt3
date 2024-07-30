const inquirer = require("inquirer");
const { Command } = require("commander");
const program = new Command();
const { pinyin } = require("pinyin-pro");
const fs = require("fs");
const path = require("path");

const BLOGTYPE = [
  { name: "技术博客", value: 1, dirpath: "./content/blog" },
  { name: "杂记", value: 2, dirpath: "./content/life" },
  { name: "游记", value: 3, dirpath: "./content/travel" },
];
const VUETEMPLATETEXT = `
<template>
  <div class="bg-#353130 iconfont flex flex-col items-center">
    kif
    <FilePreview ref="filePreview" type="image" :src="imgPreviewSrc" />
    <ToTop color="#fff" showBack />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
setPageLayout("custom");
const imgBaseUrl = "https://kiftravel.oss-cn-beijing.aliyuncs.com/img/";
const imgList = [];
const imgPreviewSrc = ref("");
const filePreview = ref();
const preview = (src: string) => {
  imgPreviewSrc.value = src;
  filePreview.value?.open();
};
</script>
`;

program
  .name("kif的新建博客文章工具")
  .description("一个方便kif来新建博客文章的命令行工具")
  .version("0.0.1");

program
  .command("new")
  .description("新建文章")
  .action(async () => {
    console.log("start init koa project:");
    const {
      type,
      title,
      categories,
      tags,
      author,
      date,
      EditorProgramPath,
      customPage,
    } = await inquirer.prompt(InitPrompts);
    const pattern = new RegExp("[\u4E00-\u9FA5]+");
    let fileName = "";
    if (pattern.test(title)) {
      fileName = pinyin(title, { toneType: "none", type: "array" }).join("_");
    } else {
      fileName = title;
    }

    const filePath = path.join(
      __dirname,
      `${BLOGTYPE.find((item) => item.value === type).dirpath}/${fileName}.md`
    );
    console.log("将新建文件:", filePath);
    if (fs.existsSync(filePath)) {
      console.log("有同名文件了已经");
      return;
    }
    let MDText = "";
    if (customPage == 1) {
      // 自定义页面
      MDText =
        `---
    date: ${date}
    tags: ${tags}
    title: ${title}
    author: ${author}
    categories: ${categories}
    custompath: "custom/${fileName}"
---
    `;
      const vuePath = path.join(__dirname, `./pages/pcustom/${fileName}.vue`);
      if (fs.existsSync(vuePath)) {
        console.log("同命名的vue自定义页面已经存在，换一个");
        return;
      } else {
        try {
          fs.writeFileSync(vuePath, VUETEMPLATETEXT);
          console.log("创建自定义页面vue文件成功,路径：", vuePath);
        } catch (error) {
          console.log("创建自定义页面vue文件失败");
          return;
        }
      }
    } else {
      MDText =
        `---
    date: ${date}
    tags: ${tags}
    title: ${title}
    author: ${author}
    categories: ${categories}
---
    `;
    }
    try {
      fs.writeFileSync(filePath, MDText);
    } catch (error) {
      console.log("写入文件失败", error);
      return;
    }

    console.log(`成功创建MD文件：${filePath},编辑器：${EditorProgramPath}`);
    const exec = require("child_process").execFile;
    if (fs.existsSync(EditorProgramPath)) {
      exec(EditorProgramPath, [filePath], function (err, data) {
        if (err) {
          throw err;
        }
        console.log(data.toString());
      });
    } else {
      console.log("没有找到编辑器，手动打开即可");
    }
  });

const getCurrentDate = () => {
  // 获取当天时间并格式化
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  // 没0补充0
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

const InitPrompts = [
  {
    type: "list",
    name: "type",
    message: "今天又想水点啥？",
    choices: BLOGTYPE,
  },

  {
    name: "title",
    message: "什么标题好呢？",
    default: "",
  },
  {
    name: "categories",
    message: "什么分类",
    default: "",
  },
  {
    name: "tags",
    message: "什么标签",
    default: "",
  },
  {
    name: "author",
    message: "作者是谁？",
    default: "kif",
  },
  {
    name: "date",
    message: "发布日期是什么？",
    default: getCurrentDate(),
  },
  {
    name: "EditorProgramPath",
    message:
      "编辑器路径，如：Typora (https://typora.io/)",
    default: "D:/Program Files/Typora/Typora.exe",
  },
  {
    type: "list",
    name: "customPage",
    message: "自定义页面?",
    choices: [
      {
        name: "yes",
        value: 1,
      },
      {
        name: "no",
        value: 0,
      },
    ],
    default: 0,
  },
];

program.parse();
