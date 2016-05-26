var fs = require('fs');
var str = '';

// fs.readFile('./js/config.js', 'utf-8',(err,data) => {
//   if (err) throw err;
//   str = data;
//   console.log(data);
// });

fs.readFile('./js/config.js', 'utf-8',(err,data) => {
  if (err) throw err;
  str = data;
});

fs.readFile('./js/main.js', 'utf-8',(err,data) => {
  if (err) throw err;
  str += data;
});

fs.readFile('./js/TodoCollection.js', 'utf-8',(err,data) => {
  if (err) throw err;
  str += data;
  console.log(str);
});

fs.writeFile('message.txt', str , function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

//concat 검색하면 기능있음. npm install concat-files --save
//concat 으로 묶고 uglify로 압축하고
