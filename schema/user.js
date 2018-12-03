const sequelize = require('sequelize')
const moment = require('moment')
const connectSequelize = require('../config/db')
const User = connectSequelize.define('user', {
      userid: {
          type: sequelize.INTEGER,
          primaryKey: true,       //主键
          autoIncrement: true,    //自增
          allowNull: false,
          comment: "自增id"       //注释:只在代码中有效
      },
      //用户名
      username: {
          type: sequelize.INTEGER,
          allowNull: false,
          defaultValue: ''
      },
      //密码
      password: {
          type: sequelize.STRING,
          allowNull: false,
          defaultValue: ''
      },
      //昵称
      account: {
          type: sequelize.STRING,
          allowNull: false,
          defaultValue: ''
      },
      // 部门
      department: {
        type: sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    }
    // createdAt: {
    //     type: sequelize.DATE,
    //     get() {
    //         return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD');
    //     }
    // },
    // updatedAt: {
    //     type: sequelize.DATE,
    //     get() {
    //         return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD');
    //     }
    // }
  }, {
      freezeTableName: true,
      timestamps: false
  })
  module.exports = User