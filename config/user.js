const Sequelize = require('sequelize');

const users = Sequelize.define('user', {
    userid: {
        type: Sequelize.INTEGER,
        primaryKey: true,       //主键
        autoIncrement: true,    //自增
        comment: "自增id"       //注释:只在代码中有效
    },
    //用户名
    username: {
        type: Sequelize.STRING
    },
    //密码
    password: {
        type: Sequelize.STRING
    },
    //昵称
    account: {
        type: Sequelize.STRING
    },
    //token
    token: {
        type: Sequelize.UUID
    }
}, {
    //使用自定义表名
    freezeTableName: true,
    //去掉默认的添加时间和更新时间
    timestamps: false,
});
//同步:没有就新建,有就不变
// users.sync();
//先删除后同步
users.sync({
    force: true
});

module.exports = users;