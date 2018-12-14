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
router.post('/api/user/updatePassword', userController.updatePassword) // 用户注册

// 线索表
// router.post('/api/cluetable/create', clueTableController.create) // 创建线索

// 订单创建
router.post('/api/clueorder/create', clueTableController.createOrder)
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
