"use strict";

// 백단

console.log("아니");
const id = document.querySelector("#id"); //queryselector은 질의 선택자, id(선택자)로 불러온다.
const password = document.querySelector("#password"); //queryselector 질의 선택자, password로 불러온다.
const loginBtn = document.querySelector("button"); //queryselector 질의 선택자, button 으로 불러온다.

loginBtn.addEventListener("click", login);

function login() {
  //   console.log(id.value);
  const req = {
    //받아올 파라미터를 오브젝트 형태로 받아옴
    id: id.value,
    password: password.value,
  };
  console.log(req);
}
