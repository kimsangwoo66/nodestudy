"use stirct";
//MVC 에서 컨트롤러

//ecma 스크립트의 문법이라고 보면된다.
// function hello(req, res)랑 같다고 보면 된다.
//hello라는 컨트롤러 함수를 만들어준다.

const UserStorage = require("../../models/UserStorage");

const output = {
  hello: (req, res) => {
    res.render("home/index"); // render()는 ejs로 데이터를 전송하는 역활을 하는 콜백 함수
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    console.log(req.body); //이곳의 req는 frontend 에서 전달한 요청 데이터를 담아두는 변수, 입력한 파라미터 값을 출력한다.
    const id = req.body.id,
      password = req.body.password;

    const users = UserStorage.getUsers("id", "password");

    const response = {};
    if (users.id.includes(id)) {
      //로그인 검증 비즈니스 로직
      const idx = users.id.indexOf(id); //indexof 메소드는 원하는 id 문자열을 찾기 위해 사용
      if (users.password[idx] === password) {
        response.success = true;
        response.msg = "로그인에 성공하였습니다.";
        return res.json(response);
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다.";
    return res.json(response);
  },
};
module.exports = {
  output,
  process,
};
