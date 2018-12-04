const clueTableModel = require('../modules/clueTable')
const util = require('util')
// const verify = util.promisify(jwt.verify)

class clueTableController {
    static async create(ctx) {
        // const token = ctx.request.body
        // let payload = await verify(token.token, 'secret')
        // console.log(payload)
        // if (token) {

        // }
        let data = ctx.request.body
        let createClueTable = await clueTableModel.create(data)
    }
}

module.exports = clueTableController