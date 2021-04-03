const fs = require('fs');
const path = require('path');

const fileUrl = './lib/test.css'; // 目标文件
const filetCopyUrl = './lib/testCopy.css'; // 目标文件副本
const resultFile = './lib/testResult.scss';

// 过滤的目标字段
const filterTexts = [
  'left',
  'right',
  // 'rotateY(0)',
];

const getFile = () => {
  fs.readFile(filetCopyUrl, (err, data) => {
    if (err) {
      fs.readFile(fileUrl, function (err, data) {
        if (err) return console.error(err);
        writeFile(filetCopyUrl, data, (err) => {
          // 写入成功
          if (!err) filterFile(data);
        })
      });
      return;
    }
    console.log('读取文件', data);
    filterFile(data);
  });
}

// 写入文件
const writeFile = (path, data, callback) => {
  fs.writeFile(path, data, function (err) {
    if (err) return callback(err);
    return callback(null);
  })
}

// 过滤文件
const filterFile = (data) => {
  console.log('data--', data);
  for (let i = 0, len = data.length; i < len; i++) {
    const el = data[i];
    console.log('el：',i, el);
  }
}
getFile();