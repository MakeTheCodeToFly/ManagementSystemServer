const clueTable = require('../schema/clueTable')
clueTable.sync({force: false})

class clueTableModel {
    static listOrder(data, id) {
        let ref = clueTable.findAndCountAll({
            where: {
                relate_user_id: id
            },
            limit: data.pageSize,
            offset: (data.currentPage - 1) * data.pageSize,
            distinct: true // 去重
        }).then(res => {
            console.log(res.rows)
            console.log(res.count)
        })
            // data: ref.rows,
            // totalCount: ref.count
    }

    static createOrder(data) {
        return clueTable.create({
            clue_name: data.clue_name, // 姓名
            clue_phone: data.clue_phone, // 电话
            clue_address: data.clue_address, // 地址
            first_buy: data.first_buy, // 是否首次购买
            // is_follow: 3,  // 是否是我的跟进中 在创建订单是定义为3 在这里定义为3字段填充
            is_finish: 1,  // 是否完成既已成单订单
            // customer_intention: 3,  // 顾客购买意向 在创建订单时为3 填充字段无意义
            purchase_commodity: data.purchase_commodity, // 购买商品
            relate_user_id: data.user_id, // 关联id
            // is_again_follow: 3, // 是否愿意再次跟进 在创建订单时定义为3字段填充
            buy_goods: data.buy_goods // 购买商品
        })
    } 

    static detailOrder(id) {
        return clueTable.findOne({
                    where: {
                        clue_id: id
                    }
                })
    }
    static updateOrder(data) {
        return clueTable.update({
            clue_name: data.clue_name,
            clue_phone: data.clue_phone,
            clue_address: data.clue_address,
            first_buy: data.first_buy,
            purchase_commodity: data.purchase_commodity,
            buy_goods: data.buy_goods
        }, {
            where: {
                clue_id: data.id
            }
        })
    }
    // 线索

    /**
     * 
     * @param { 创建线索} data
     */
    static async createClue(data) {
        return clueTable.create({
            relate_user_id: data.id, // 判断用户id
            clue_name: data.clue_name, // 姓名
            clue_phone: data.clue_phone, // 电话
            clue_address: data.clue_address, // 地址
            customer_intention: data.customer_intention, // 客户购买意向
            is_again_follow: data.is_again_follow  // 是否愿意再次跟进 在创建订单时定义为3字段填充
        })
    }
    
    // 线索列表
         /**
     * 
     * @param {线索列表} ctx 
     * is_follow 线索状态
     * clue_name 用户名
     * limit 数量
     * page 页数
     */
    static async clueList(params) {
        let ret = null;
        let { page = 1, clue_name, is_follow } = params;
        ret = await clueTable.findAndCountAll({
            limit: 10,//每页10条
            offset: (page - 1) * 10,
            where: {
                clue_name
            },
            'order': [
                ['clue_id', 'DESC']
            ],
            attributes: { exclude: ['content'] }
        })
        return {
            code: 200,
            data: ret.rows,
            meta: {
                current_page: parseInt(page),
                per_page: 10,
                count: ret.count,
                total: ret.count,
                total_pages: Math.ceil(ret.count / 10),
            }
        }
    }

    /**
     * 新建跟进
     */
    static async createFollow(data) {
        return clueTable.create({
            relate_user_id: data.id, // 判断用户id
            clue_name: data.clue_name, // 姓名
            clue_phone: data.clue_phone, // 电话
            clue_address: data.clue_address, // 地址
            customer_intention: data.customer_intention, // 客户购买意向
            is_again_follow: data.is_again_follow,  // 是否愿意再次跟进 在创建订单时定义为3字段填充
            follow_record: data.follow_record  // 跟进记录
        })
    }

    // 我的跟进列表
            /**
        * 
        * @param {跟进列表} ctx
        * is_follow 线索状态
        * clue_name 用户名
        * limit 数量
        * page 页数
        */
    static async followList(params) {
        let ret = null;
        let { page = 1, clue_name, is_follow } = params;
        ret = await clueTable.findAndCountAll({
            limit: 10,//每页10条
            offset: (page - 1) * 10,
            where: {
                clue_name
            },
            'order': [
                ['clue_id', 'DESC']
            ],
            attributes: { exclude: ['content'] }
        })
        return {
            code: 200,
            data: ret.rows,
            meta: {
                current_page: parseInt(page),
                per_page: 10,
                count: ret.count,
                total: ret.count,
                total_pages: Math.ceil(ret.count / 10),
            }
        }
    }

}

module.exports = clueTableModel