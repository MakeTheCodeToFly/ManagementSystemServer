const sequelize = require('sequelize')
const moment = require('moment')
const connectSequelize = require('../config/db')
const clueTable = connectSequelize.define('clue_table', {
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
          defaultValue: '',
          comment: "线索名字" 
      },
      //线索手机号
      clue_phone: {
          type: sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          comment: "线索手机号" 
      },
      //线索地址
      clue_address: {
          type: sequelize.STRING,
          allowNull: false,
          defaultValue: '',
          comment: "线索地址" 
      },
      /**
       * 1:男
       * 2:女
       */
      sex: {
          type: sequelize.INTEGER,
          allowNull:false,
          defaultValue: 1,
          comment:'线索性别'
      },
      // 顾客购买意向
    /**
     * 1: 购买意向强烈
     * 2: 有购买意向，但是不强烈
     * 3: 缺乏意向，急需沟通
     */
      customer_intention: {
        type: sequelize.INTEGER,
        allowNull: false,
        defaultValue: 3,
        comment: "顾客购买意向" 
    },
    // 判定是否为我的跟进
    is_follow: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: 3,
        comment: "判定是否为我的跟进，" 
    },
    // 关联用户userid
    relate_user_id: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        comment: "关联用户userid" 
    },
    // 是否再次跟进
    /**
     * 1，是，2：否
     */
    is_again_follow: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: 3,
        comment: "是否再次跟进" 
    },
    // 判定我的已完成订单
    is_finish: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: 3,
        comment: "判定我的已完成订单" 
    },
    purchase_commodity: {
        type: sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "在创建订单中购买商品" 
    },
    first_buy: {
        type: sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "在创建订单中是否首次购买" 
    },
    follow_record: {
        type: sequelize.INTEGER,
        allowNull: false,
        
        defaultValue: '',
        comment: "在我的跟进中填写我的跟进记录" 
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
  module.exports = clueTable