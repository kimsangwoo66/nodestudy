"use strict";
// html과 연결되어있는 javascript 파일
// 프론트와 연결된 자바스크립트

const id = document.querySelector("#id"); //queryselector은 질의 선택자, id(선택자)로 불러온다.
const name = document.querySelector("#name");
const password = document.querySelector("#password"); //queryselector 질의 선택자, password로 불러온다.
const confirmPassword = document.querySelector("#confirm-password");

const registerBtn = document.querySelector("#button"); //queryselector 질의 선택자, button 으로 불러온다.
console.log("앙녕칭구"); //콘솔창에서 메시지가 나오게 되면 register.js 와 register.ejs가 연결확인
registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해 주세요");
  if (password !== confirmPassword) {
    return alert("비밀번호가 일치하지 않습니다.");
  }
  //   console.log(id.value);
  const req = {
    //받아올 파라미터를 오브젝트 형태로 받아옴
    id: id.value,
    name: name.value,
    password: password.value,
  };

  // console.log(req);
  // console.log(JSON.stringify(req)); //json 객체는 문자열로 감싸져있음

  //응답한 데이터를 다시 받을려면 then()이라는 메소드를 사용해서 받아 올 수있다.
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        //로그인 성공시 루트 페이지로 이동
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    });
}
