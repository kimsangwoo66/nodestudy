"use stirct";
const User = require("../../models/User");
//MVC 에서 컨트롤러

//ecma 스크립트의 문법이라고 보면된다.
// function hello(req, res)랑 같다고 보면 된다.
//hello라는 컨트롤러 함수를 만들어준다.

const output = {
  hello: (req, res) => {
    res.render("home/index"); // render()는 ejs로 데이터를 전송하는 역활을 하는 콜백 함수
  },

  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    // console.log(response);
    return res.json(response);
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    // console.log(response);
    return res.json(response);
  },
};
module.exports = {
  output,
  process,
};
