var fs = require('fs');

//인자 : 파일 이름, 파일 내용, 콜백 //
//var file = fs.writeFile('message.txt', 'Hello Node') 가 C언어나 Java 형태에서 익숙하겠지만 아래의 콜백 방식이 비동기로써 우수함

fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
