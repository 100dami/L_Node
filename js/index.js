const Myvar = require("./myvar");
const setVar = new Myvar();

console.log(setVar.name);

/*
모듈 내보낼 때
module.exports.~~~

모듈 가져올 때
변수 변수명 = require("파일의 경로")
*/