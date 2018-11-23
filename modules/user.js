const connect = require('./db')
const log = console.info

class userModel {
    static login() {
        return new Promise((res, rej) => {
            connect.query("select username, password, account from user", (err, data) => {
                res(data)
            })
        })
    }
    static create(data) {
        return new Promise((resolve, reject) => {
            connect.query("insert into user (account, username, password) values ('" + data.account + "'," + data.username + "," + data.password + ")", (err, res) => {
                if (res) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    }
    // closeMysql(connect) {
    //     connect.end((err) => {
    //       if (err) {
    //         console.log(`mysql关闭失败： ${err}!`)
    //       } else {
    //         console.log('mysql关闭成功！')
    //       }
    //     })
    //   }
}

module.exports = userModel