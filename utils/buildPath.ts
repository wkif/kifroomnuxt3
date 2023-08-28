const fs = require('node:fs');
const path = require('node:path');
const { Base64 } = require('js-base64');


function getFilesAndFoldersInDir(pathIn: string, pathOut: string) {
  const PUBLIC_PATH = path.resolve(__dirname, pathIn);
  const fileOutPath = path.resolve(__dirname, pathOut);
  const PATHFILE_PATH = path.resolve(__dirname, "../data/path.json");
  emptyDir(fileOutPath)
  const list = fs.readdirSync(PUBLIC_PATH);
  const pathList: {
    name: string,
    path: string
  }[] = []
  console.log(`Start file construction. There are ${list.length} files`)
  let Count_succ = 0;
  let Count_fail = 0;
  list.forEach((item: string) => {
    console.log("Build:", item)
    const filePath = path.join(PUBLIC_PATH, item);
    if (fs.existsSync(filePath)) {
      const newName = `${Base64.encode(item.split('.')[0]).replace(/[\/\\:*?"<>|]/g, '')}`.slice(0, 10);
      const newFileName = `${newName}.md`;
      const newPath = path.join(fileOutPath, newFileName);
      pathList.push({
        name: item,
        path: `/post/${newName}`
      })
      fs.cp(filePath, newPath, (err: any) => {
        if (err) {
          console.error(err);
          console.log("Build fail")
          Count_fail++
        } else {
          Count_succ++
        }
      });
    } else {
      console.log("File not exist")
      Count_fail++
    }
  })
  fs.writeFile(PATHFILE_PATH, JSON.stringify(pathList, null, "\t"), (err: any) => {
    if (err) {
      console.log("Failed to create a path mapping file. Procedure", err);
    } else {
      console.log(`A total of ${list.length} path mapping files are created successfully. ${Count_succ} path mapping files are created successfully and ${Count_fail} path mapping files fail`);
    }
  });

}

/**
 * 删除文件夹下所有问价及将文件夹下所有文件清空
 * @param {*} path 
 */
function emptyDir(path: string) {
  const files = fs.readdirSync(path);
  files.forEach((file: any) => {
    const filePath = `${path}/${file}`;
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      emptyDir(filePath);
    } else {
      fs.unlinkSync(filePath);
      console.log(`删除${file}文件成功`);
    }
  });
}
getFilesAndFoldersInDir('../data/post', '../content/post');