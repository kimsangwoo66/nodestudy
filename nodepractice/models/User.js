"use strict";

const UserStorage = require("./UserStorage");
class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const client = this.body;

    const { id, password } = UserStorage.getUserInfo(client.id);

    if (id) {
      // 스토리지의 id와 클라이언트의 아이디가 같고 패스워드가 같으면 true
      if (id === client.id && password === client.password) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다." };
  }

  register() {
    const client = this.body;
    const response = UserStorage.save(client);
    return response;
  }
}

module.exports = User;
