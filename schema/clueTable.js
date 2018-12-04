const sequelize = require('sequelize')
const moment = require('moment')
const connectSequelize = require('../config/db')
const User = connectSequelize.define('clue_table', {
      clue_id: {
          type: sequelize.INTEGER,
          primaryKey: true,       //主键
          autoIncrement: true,    //自增
          allowNull: false,
          comment: "自增id"       //注释:只在代码中有效
      },
      //线索名
      clue_name: {
          type: sequelize.STRING,
          allowNull: false,
          defaultValue: ''
      },
      //线索手机号
      clue_phone: {
          type: sequelize.STRING,
          allowNull: false,
          defaultValue: ''
      },
      //线索地址
      Clue_address: {
          type: sequelize.STRING,
          allowNull: false,
          defaultValue: ''
      },
      // 顾客购买意向
      customer_intention: {
        type: sequelize.INTEGER,
        allowNull: false,
        defaultValue: ''
    },
    // 判定是否为我的跟进
    is_follow: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },
    // 关联用户userid
    relate_user_id: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },
    // 是否再次跟进
    is_again_follow: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },
    // 判定我的已完成订单
    is_finish: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },
    // 线索录入时间
    createdAt: {
        type: sequelize.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD');
        }
    },
    // 线索更新时间
    updatedAt: {
        type: sequelize.DATE,
        get() {
            return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD');
        }
    }
  }, {
      freezeTableName: true
  })
  module.exports = User