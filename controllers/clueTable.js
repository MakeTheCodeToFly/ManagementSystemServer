const clueTableModel = require('../modules/clueTable')
const util = require('util')
const jwt = require('jsonwebtoken');
const verify = util.promisify(jwt.verify)

// const verify = util.promisify(jwt.verify)

class clueTableController {
    static async createOrder(ctx) {
        // const token = ctx.request.body
        // let payload = await verify(token.token, 'secret')
        // console.log(payload)
        // if (token) {

        // }
        let data = ctx.request.body
        let createOrderData = await clueTableModel.createOrder(data)
        if (createOrderData.dataValues) {
            ctx.body = ({
                status: 1,
                message: '创建成功！'
            })
        } else {
            ctx.body = ({
                status: 0,
                message: '创建失败！'
            })
        }
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
    
    static async editOrder(ctx) {
        let body = ctx.request.body
        let id = ctx.params.id
    }
}

module.exports = clueTableController