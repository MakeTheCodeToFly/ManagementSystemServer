const userModel = require('../modules/user')

class userController {
    // 登录接口
    static async login(ctx) {
        let loginFlag = false
        const data = ctx.request.body
        if (!data.username) {
            ctx.body = ({
                status: 0,
                message: '请输入账号！'
            })
            loginFlag = true
        } else if (!data.password) {
            ctx.body = ({
                status: 0,
                message: '请输入密码！'
            })
            loginFlag = true
        }
        const user = await userModel.login()
        if (user & loginFlag) {
            let a = user.filter((item, index, arr) => {
                return item.username == data.username
            })
            if (a.length == 1) {
                a.forEach((item, index, arr) => {
                    if (item.password == data.password) {
                        ctx.body = ({
                            status: 1,
                            account: item.account,
                            message: '登录成功！'
                        })
                    } else {
                        ctx.body = ({
                            status: 0,
                            message: '密码错误！'
                        })
                    }
                })
            } else {
                ctx.body = ({
                    status: 0,
                    message: '用户名不存在'
                })
            }
        }
    }

    // 用户注册
    static async create(ctx) {
        let createFlag = false
        const data = ctx.request.body
        if (!data.account) {
            ctx.body = ({
                status: 0,
                message: '用户昵称不能为空！'
            })
            createFlag = true
        } else if (!data.username) {
            ctx.body = ({
                status: 0,
                message: '用户账号不能为空！'
            })
            createFlag = true
        } else if (!data.password) {
            ctx.body = ({
                status: 0,
                message: '用户密码不能为空！'
            })
            createFlag = true
        }
        const registUser = await userModel.create(data)
        if (createFlag) {
            if (registUser.serverStatus == 2) {
                ctx.body = ({
                    status: 1,
                    message: '用户注册成功！'
                })
            } else {
                ctx.body = ({
                    status: 0,
                    message: '用户注册失败！'
                })
            }
        }
    }

    // 修改密码
    static async updatePassword(ctx) {
        const data = ctx.request.body
        const registUser = await userModel.updataPassword(data)
    }
}

module.exports = userController