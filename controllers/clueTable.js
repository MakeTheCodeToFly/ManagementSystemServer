const clueTableModel = require('../modules/clueTable')
const jwt = require('jsonwebtoken')
const util = require('util')
const verify = util.promisify(jwt.verify)

class clueTableController {
    static async listOrder(ctx) {
        let data = ctx.request.body
        let payload = await verify(data.token, 'secret')
        let listData = await clueTableModel.listOrder(data, payload.id)
        // if (payload) {
        //     if (listData.dataValues) {
        //         ctx.body = ({
        //             status: 1,
        //             result:listData.dataValues,
        //             message: 'ok'
        //         })
        //     } else {
        //         ctx.body = ({
        //             status: 0,
        //             message: '数据获取失败~'
        //         })
        //     }
        // } else {
        //     ctx.body = ({
        //         status: 403,
        //         message: '请先登录~'
        //     })
        // }
    }

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

    static async detailOrder(ctx) {
        let id = ctx.params.id
        let detailData = await clueTableModel.detailOrder(id)
        if (detailData.dataValues) {
            ctx.body = ({
                status: 1,
                result: detailData.dataValues,
                message: 'ok~'
            })
        } else {
            ctx.body = ({
                status: 0,
                message: 'error~'
            })
        }
    }

    static async updateOrder(ctx) {
        let body = ctx.request.body
        let token = data.token
        if (token) {
            payload = await verify(token.split(' ')[1])
            console.log(payload)
            // if (updateData.length >= 1) {
            //     let updateData = await clueTableModel.updateOrder(body)
            //     ctx.body = ({
            //         status: 1,
            //         message: '保存成功~'
            //     })
            // } else {
            //     ctx.body = ({
            //         status: 0,
            //         message: '保存失败~'
            //     })
            // }
        }
        
    }

  /**
   * 
   * @param {创建线索} ctx 
   * 
   */
    static async createClue(ctx) {
        let data = ctx.request.body
        const token = data.token
        let payload = await jwt.verify(token, 'secret')
        if (token && payload) {   
                data.id = payload.id
                let createData = await clueTableModel.createClue(data)
                if (createData.dataValues) {
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
        } else { //  1、时间失效的时候 2、 伪造的token  
            ctx.body = ({
                status: 0,
                message: '无效token！'
            })
        }
    }
    /**
     * 
     * @param {线索列表} ctx 
     */
    static async clueList(ctx) {
        let data = ctx.request.body
        const token = data.token
        let payload = await jwt.verify(token, 'secret')
        if (token && payload) {
            // data.is_follow = data.is_follow ? data.is_follow :  0
            // data.clue_name = data.clue_name ? data.clue_name : ""
            let listData = await clueTableModel.clueList(data)
            if (listData) {
                ctx.body = ({
                    result: listData,
                    status: 1,
                    message: '成功！'
                })
            } else {
                ctx.body = ({
                    status: 0,
                    message: '失败！'
                })
            }
        } else { //  1、时间失效的时候 2、 伪造的token  
            ctx.body = ({
                status: 0,
                message: '无效token！'
            })
        }
    }
}

module.exports = clueTableController