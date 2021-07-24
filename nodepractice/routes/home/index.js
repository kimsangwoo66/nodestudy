"use strict"; // ecma script를 준수 하겠다는 의미

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello); //api
router.get("/login", ctrl.login); //api

module.exports = router; //이파일을 다른외부파일과 연결하기위해 사용, 내보내기 기능 , app.js와 연결해야함
