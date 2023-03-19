const fs = require('fs');
const path = require('path');

// 源文件路径
const sourcePath = path.join(__dirname, '../docs', 'index.html');
// 目标文件路径
const targetPath = path.join(__dirname, '../docs', '404.html');

// 读取源文件
fs.readFile(sourcePath, 'utf8', function (err, data) {
  if (err) throw err;
  // 写入目标文件
  fs.writeFile(targetPath, data, 'utf8', function (err) {
    if (err) throw err;
    console.log(`Successfully copied and renamed ${sourcePath} to ${targetPath}`);
  });
});
