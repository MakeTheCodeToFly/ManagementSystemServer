const router = require('koa-router')()
const userController = require('../controllers/user')
const clueTableController = require('../controllers/clueTable')

router.get('/json', async (ctx, next) => {
  // 查询数据
let sqlQuery = 'select * from user'
connect.query(sqlQuery, function(err, res) {
  if (err) {
    console.log(`SQL error: ${err}!`)
  } else {
    result = res
    closeMysql(connect)
  }
})
  ctx.body = {
    status: 1,
    result,
    message: 'ok'
  }
})

// 用户接口
router.post('/api/user/login', userController.login) // 用户登录接口
router.post('/api/user/register', userController.create) // 用户注册
router.post('/api/user/updatepassword', userController.updatePassword) // 用户修改密码

// 线索表
// router.post('/api/cluetable/create', clueTableController.create) // 创建线索

// 订单
router.post('/api/clueorder/finish/list/:id?:token', clueTableController.listOrder) // 获取订单列表
router.post('/api/clueorder/finish/create', clueTableController.createOrder) // 创建订单
router.get('/api/clueorder/finish/detail/:id', clueTableController.detailOrder) // 获取订单详细信息
router.post('/api/clueorder/finish/update', clueTableController.updateOrder) // 编辑保存成功

// 线索
// 新建线索
router.post('/api/clue/list/create', clueTableController.createClue) // 创建线索

// 线索列表
// 线索详情
// 编辑线索


// 跟进
// 新建跟进
// 线索跟进
// 线索跟进
// 编辑跟进

// 查询成功后关闭mysql
// function closeMysql(connect) {
//   connect.end((err) => {
//     if (err) {
//       console.log(`mysql关闭失败： ${err}!`)
//     } else {
//       console.log('mysql关闭成功！')
//     }
//   })
// }

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})


module.exports = router
