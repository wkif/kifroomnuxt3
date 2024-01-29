// 引入核心模块(fs)
var fs = require("fs");
var path = require("path");


const editorPath = `D:/Program Files/Typora/Typora.exe`;
const ContentPath = "content";

const args = process.argv.slice(2);
if (args.length <= 0) {
  console.log("请输入文件名");
  return;
}
const Title = (
  args[0].includes(".md") ? args[0].replace(".md", "") : args[0]
).split("/")[args[0].split("/").length - 1];
const fileName = args[0].includes(".md") ? args[0] : args[0] + ".md";
let Tags = [];
if (args.length >= 1) {
  Tags = args.slice(1);
}
let tags = "";
Tags.forEach((element) => {
  // tags
  tags += `  - ${element} \n`;
});
if (fs.existsSync(`./${ContentPath}/${fileName}`)) {
  console.log("该命名已经存在，换一个");
  return;
}
// 获取当天时间并格式化

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const currentDate = `${year}-${month}-${day}  ${hour}:${minute}:${second}`;

const MDText =
  `---
date: ${currentDate}
url: 
aliases: 
tags: 
` +
  tags +
  `
title: ${Title}
---
`;
fs.writeFileSync(`./${ContentPath}/${fileName}`, MDText, (err) => {
  if (err) {
    console.log(" 写入失败");
    return;
  }
});
const filePath = path.join(__dirname, `${ContentPath}/${fileName}`);

console.log(
  `写入成功,文件名：${Title},路径：${filePath},标签：${Tags.join(
    ","
  )},日期：${currentDate}`
);

const exec = require("child_process").execFile;
if (fs.existsSync(editorPath)) {
  exec(editorPath, [filePath], function (err, data) {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  });
} else {
  console.log("没有找到编辑器，手动打开即可");
}
