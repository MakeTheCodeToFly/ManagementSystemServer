const connect = require('./db')
// const User = require('../schema/user')
// User.sync({force: false})

class userModel {
    // 用户登录
    static login() {
        return new Promise((res, rej) => {
            connect.query("select username, password, account, department, userid from user", (err, data) => {
                res(data)
            })
        })
    }
    // 注册用户
    static create(data) {
        return new Promise((resolve, reject) => {
            connect.query("insert into user (account, username, password, department) values ('" + data.account + "','" + data.username + "','" + data.password + "','" + data.department + "')", (err, res) => {
                if (res) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    }
    // 查询密码是否存在
    static isPassword(data) {
        return new Promise((resolve, reject) => {
            connect.query("select * from user where password = '" + data.password + "' and username='"+ data.username +"'", (err, res) => {
                if (res.length != 0) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        })
    }

    // 更改密码
    static updatePassword(data) {
        return new Promise((resolve, reject) => {
            connect.query("update user set password = '" + data.newpassword +  "'where username = '" + data.username + "'", (err, res) => {
                if (res) {
                    resolve(res)
                } else {
                    reject(err)
                }
            })
        }) 
    }

    static loginData(data) {
        let {username, password} = data 
        return User.findOne({
            where: {
                username,
                password
            }
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