const sequelize = require('sequelize')
const moment = require('moment')
const connectSequelize = require('../config/db')
const clueOrder = connectSequelize.define('clue_order', {
      order_id: {
          type: sequelize.INTEGER,
          primaryKey: true,       //主键
          autoIncrement: true,    //自增
          allowNull: false,
          comment: "自增id"       //注释:只在代码中有效
      },
      //订单姓名
      order_name: {
          type: sequelize.STRING,
          allowNull: false,
          defaultValue: ''
      },
      //订单性别
      order_sex: {
          type: sequelize.INTEGER,
          allowNull: false,
          defaultValue: ''
      },
      //订单来源
      order_source: {
          type: sequelize.STRING,
          allowNull: false,
          defaultValue: ''
      },
      // 购买意向级别
      interest_level: {
        type: sequelize.INTEGER,
        allowNull: false,
        defaultValue: ''
    },
    // 创建订单关联用户
    order_user_id: {
        type: sequelize.INTEGER,
        allowNull: false,
        defaultValue: ''
    },
    // 购买商品类型
    purchase_commodity: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },
    // 线索录入时间
    createdAt: {
        type: sequelize.DATE,
        get() {
            return moment(this.getDataValue('createAt')).format('YYYY-MM-DD');
        }
    },
    updatedAt: {
        type: sequelize.DATE,
        get() {
            return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD');
        }
    }
  }, {
      freezeTableName: true
  })
  module.exports = clueOrder