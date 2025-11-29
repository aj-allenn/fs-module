const fs = require('fs');
const path = require('path');

const folderPath = './files';
const data = fs.readdirSync(folderPath);

const txtFiles = data.filter(file => path.extname(file) === '.txt');

console.log("TEXT Files:");
txtFiles.forEach(file => console.log(file));