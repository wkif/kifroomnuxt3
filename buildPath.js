const fs = require('node:fs')
const path = require('node:path')
const { Base64 } = require('js-base64')

function PostDir(pathIn, pathOut) {
  const PUBLIC_PATH = path.resolve(__dirname, pathIn)
  const fileOutPath = path.resolve(__dirname, pathOut)
  const PATHFILE_PATH = path.resolve(__dirname, './data/path.json')
  if (!fs.existsSync(fileOutPath)) {
    fs.mkdirSync(fileOutPath)
  }
  emptyDir(fileOutPath)
  const list = fs.readdirSync(PUBLIC_PATH)
  const pathList = []
  console.log(`Start file construction. There are ${list.length} files`)
  let Count_succ = 0
  let Count_fail = 0
  list.forEach((item) => {
    console.log('Build:', item)
    const filePath = path.join(PUBLIC_PATH, item)
    if (fs.existsSync(filePath)) {
      const newName = `${Base64.encode(item.split('.')[0]).replace(/[\/\\:*?"<>|]/g, '')}`.slice(
        0,
        10
      )
      const newFileName = `${newName}.md`
      const newPath = path.join(fileOutPath, newFileName)
      pathList.push({
        name: item,
        path: `/post/${newName}`
      })
      fs.cp(filePath, newPath, (err) => {
        if (err) {
          console.error(err)
          console.log('Build fail')
          Count_fail++
        } else {
          Count_succ++
        }
      })
    } else {
      console.log('File not exist')
      Count_fail++
    }
  })
  fs.writeFile(PATHFILE_PATH, JSON.stringify(pathList, null, '\t'), (err) => {
    if (err) {
      console.log('Failed to create a path mapping file. Procedure', err)
    } else {
      console.log(
        `A total of ${list.length} path mapping files are created successfully. ${Count_succ} path mapping files are created successfully and ${Count_fail} path mapping files fail`
      )
    }
  })
}

// function PostDir(inPath, outPath) {
//   const fileOutPath = path.resolve(__dirname, outPath)
//   const fileInPath = path.resolve(__dirname, inPath)
//   if (!fs.existsSync(fileOutPath)) {
//     fs.mkdirSync(fileOutPath)
//   }
//   emptyDir(fileOutPath)
//   copyDir(fileInPath, fileOutPath, true)
// }

function TravelDir(inPath, outPath) {
  const fileOutPath = path.resolve(__dirname, outPath)
  const fileInPath = path.resolve(__dirname, inPath)
  if (!fs.existsSync(fileOutPath)) {
    fs.mkdirSync(fileOutPath)
  }
  emptyDir(fileOutPath)
  copyDir(fileInPath, fileOutPath)
}

// 拷贝文件夹
function copyDir(srcDir, desDir) {
  fs.readdir(srcDir, { withFileTypes: true }, (_err, files) => {
    for (const file of files) {
      // 判断是否为文件夹
      if (file.isDirectory()) {
        const dirS = path.resolve(srcDir, file.name)
        const dirD = path.resolve(desDir, file.name)
        // 判断是否存在dirD文件夹
        if (!fs.existsSync(dirD)) {
          fs.mkdir(dirD, (err) => {
            if (err) {
              console.log(err)
            }
          })
        }
        copyDir(dirS, dirD)
      } else {
        const srcFile = path.resolve(srcDir, file.name)
        const desFile = path.resolve(desDir, file.name)
        fs.copyFileSync(srcFile, desFile)
        console.log(`${file.name} 拷贝成功`)
      }
    }
  })
}

/**
 * 删除文件夹下所有问价及将文件夹下所有文件清空
 * @param {*} path
 */
function emptyDir(path) {
  const files = fs.readdirSync(path)
  files.forEach((file) => {
    const filePath = `${path}/${file}`
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      emptyDir(filePath)
    } else {
      fs.unlinkSync(filePath)
      console.log(`删除${file}文件成功`)
    }
  })
}

function main() {
  PostDir('./data/post', './content/post')
  TravelDir('./data/travel', './content/travel')
}
main()
