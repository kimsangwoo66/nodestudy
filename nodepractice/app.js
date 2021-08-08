"use strict";
//모듈
const express = require("express");
const bodyParser = require("body-parser");
//환경변수 설정 .env를 활용하면 어떤 os환경에서 개발해도 동일한 환경변수로 작업할 수 있다.
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
// app.set("views", "./views");
app.set("views", "./src/views");
app.set("view engine", "ejs"); //뷰엔진을 ejs 로 해석해 주기 위해 사용, ejs 는 html이라고 생각하고 사용

app.use(express.static(`${__dirname}/src/public`)); //src 앞에 / 뺴먹으면 바로 css 안잎혀진다.

app.use(bodyParser.json()); //json data를 파싱해 올수 있도록 명시

app.use(bodyParser.urlencoded({ extended: true })); //url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 재대로 인식 되지 않는 문제 해결

app.use("/", home); //use -> 미들웨어를 등록해주는 메서드

module.exports = app;
