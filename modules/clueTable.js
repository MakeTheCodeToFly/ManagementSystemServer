const clueTable = require('../schema/clueTable')
clueTable.sync({force: false})

class clueTableModel {
    static create(data) {
        console.log(data)
        return clueTable.create({
            clue_name: data.clue_name,
            clue_phone: data.clue_phone,
            clue_address: data.clue_address,
            customer_intention: data.customer_intention,
            is_follow: 0, 
            is_finish: 0, 
            relate_user_id: data.user_id,
            is_again_follow: data.is_again_follow
        })
    } 
}

module.exports = clueTableModel