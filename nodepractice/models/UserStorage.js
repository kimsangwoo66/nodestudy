"use strict";

const { error } = require("console");
// pending은 데이터를 전부 읽어오지 못했다 라는 의미이다.
const fs = require("fs").promises;

class UserStorage {
  // 가독성을 좋게 하기 위해 분리 #은 컨벤션
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id); //id에 해당하는 리스트를 idx에 넣음
    const userskeys = Object.keys(users); // => [id, password, name]
    const userInfo = userskeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {}); //초기값으로는 오브젝트를 넣음
    console.log(userInfo);
    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data); //파라미터의 데이터를 파싱해서 다룰수있는 데이터로 바꿈
    if (isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {}); //원하는 필드만담는새로운 배열을 생성하기위해 reduce메소드 사용

    return newUsers;
  }

  //다른곳에서 UserStorage 클래스 자체의 변수에 접근하기 위해서는 그변수 앞에 static을 붙여줘야 한다.
  static getUsers(isAll, ...fields) {
    // ...을 사용하면 리스트로 받아온다?

    //아이디 필드와 패스워드 필드만 가져와서 리턴해주기 위한 메소드
    return fs
      .readFile("./databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);
    // const users = this.#users;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static async save(userInfo) {
    // await은 async 안에서만 동작이 가능하다.
    const users = await this.getUsers(true);
    // 데이터 추가, 데이터를 문자열 형태로 변경 = json.stringify
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    fs.writeFile("./databases/users.json", JSON.stringify(users));
    return { success: true };
    // const data = "a";
    console.log(users);
  }
}

module.exports = UserStorage;
