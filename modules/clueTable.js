const clueTable = require('../schema/clueTable')
clueTable.sync({force: false})

class clueTableModel {
    static createOrder(data) {
        return clueTable.create({
            clue_name: data.clue_name, // 姓名
            clue_phone: data.clue_phone, // 电话
            clue_address: data.clue_address, // 地址
            first_buy: data.first_buy, // 是否首次购买
            is_follow: 3,  // 是否是我的跟进中 在创建订单是定义为3 在这里定义为3字段填充
            is_finish: 1,  // 是否完成既已成单订单
            customer_intention: 3,  // 顾客购买意向 在创建订单时为3 填充字段无意义
            purchase_commodity: data.purchase_commodity, // 购买商品
            relate_user_id: data.user_id, // 关联id
            is_again_follow: 3, // 是否愿意再次跟进 在创建订单时定义为3字段填充
            buy_goods: data.buy_goods // 购买商品
        })
    } 
}

module.exports = clueTableModel