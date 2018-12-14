const clueTableModel = require('../modules/clueTable')
const util = require('util')
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
    }
    
    static async editOrder(ctx) {
        let body = ctx.request.body
        let id = ctx.params.id
    }
}

module.exports = clueTableController