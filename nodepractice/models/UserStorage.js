"use strict";

class UserStorage {
  //다른곳에서 UserStorage 클래스 자체의 변수에 접근하기 위해서는 그변수 앞에 static을 붙여줘야 한다.
  static #users = {
    //변수 앞에 #을 사용하면 데이터 은닉화를 해줄 수 있다. 즉 public한 변수에서 private 한 변수로 선언을 해주는것이다. 이렇게하면 외부에서 불러올 수 없다.
    //실제 이 필드의 데이터들은 데이터베이스를 이용해서 추후 리펙토링 예정
    id: ["kim", "jim", "mkmk"],
    password: ["1234", "12345", "123456"],
    name: ["김하나", "이둘둘", "셋넷넷"],
  };

  static getUsers(...fields) {
    // ...을 사용하면 리스트로 받아온다?
    //console.log(fields);
    //아이디 필드와 패스워드 필드만 가져와서 리턴해주기 위한 메소드
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {}); //원하는 필드만담는새로운 배열을 생성하기위해 reduce메소드 사용

    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id); //id에 해당하는 리스트를 idx에 넣음
    const userskeys = Object.keys(users); // => [id, password, name]
    const userInfo = userskeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {}); //초기값으로는 오브젝트를 넣음

    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.password.push(userInfo.password);
    return { success: true };
  }
}

module.exports = UserStorage;
