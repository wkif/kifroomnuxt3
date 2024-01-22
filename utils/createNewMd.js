// 引入核心模块(fs)
var fs = require("fs");

const ContentPath = "./content";

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
if (fs.existsSync(`${ContentPath}/${fileName}`)) {
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
fs.writeFileSync(`${ContentPath}/${fileName}`, MDText, (err) => {
  if (err) {
    console.log(" 写入失败");
    return;
  }
});

console.log(
  `写入成功,文件名：${Title},路径：${ContentPath}/${fileName},标签：${Tags.join(
    ","
  )},日期：${currentDate}`
);
