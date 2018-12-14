const clueTableModel = require('../modules/clueTable')
const util = require('util')
const jwt = require('jsonwebtoken');
const verify = util.promisify(jwt.verify)

// const verify = util.promisify(jwt.verify)

class clueTableController {
    static async create(ctx) {
        // const token = ctx.request.body
        // let payload = await verify(token.token, 'secret')
        // console.log(payload)
        // if (token) {

        // }
        console.log("前端数据" + data)
        let token = data.token
        if (token) {
            // 解密payload，获取用户名和ID
            payload = await verify(token.split(' ')[1])

            const user = {
                id: payload.id,
                username: payload.username,
            }
            console.log(user)
            // const user = await clueTableModel.findClueByPhone()

            let createClueTable = await clueTableModel.create(data)

        } else {
            ctx.body = ({
                status: 0,
                message: '新建失败！'
            })
        }
    }
}

module.exports = clueTableController