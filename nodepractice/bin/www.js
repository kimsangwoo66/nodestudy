"use strict";
//서버 실행 파일

const app = require("../app");
const PORT = process.env.PORT || 3000;
//이곳에서 이렇게 정의를 하더라도 다른 파일에서 moodule.exports 죽 내보내기를 하지 않으면 가져올 수가 없다.

//app.js 가 아니라 이 폴더에있는 www.js 를 실행시켜야 서버가 실행된다. 실행 코드 => node ./bin/www.js
app.listen(PORT, () => {
  console.log("서버 가동");
});
