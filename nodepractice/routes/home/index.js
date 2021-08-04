"use strict"; // ecma script를 준수 하겠다는 의미

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello); //api
router.get("/login", ctrl.output.login); //api'
router.get("/register", ctrl.output.register); //서버단에서 구현중
router.post("/login", ctrl.process.login);
// server에서 login data를 받는 api , 이것을 주석처리 하면 전달할 경로가 사라진다.

module.exports = router; //이파일을 다른외부파일과 연결하기위해 사용, 내보내기 기능 , app.js와 연결해야함
