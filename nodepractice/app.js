"use strict";
"use strict";
//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs"); //뷰엔진을 ejs 로 해석해 주기 위해 사용, ejs 는 html이라고 생각하고 사용

app.use(express.static(`${__dirname}/public`));
app.use("/", home); //use -> 미들웨어를 등록해주는 메서드

module.exports = app;
