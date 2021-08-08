"use strict";
//DB에 접근하는 모델

const db = require("../config/db");

class UserStorage {
  //다른곳에서 UserStorage 클래스 자체의 변수에 접근하기 위해서는 그변수 앞에 static을 붙여줘야 한다.

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) reject(err);
        console.log(data[0]);
        resolve(data[0]);
        // console.log(data);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
      db.query(
        query,
        [userInfo.id, userInfo.name, userInfo.password],
        (err) => {
          if (err) reject(`${err}`);

          resolve({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
