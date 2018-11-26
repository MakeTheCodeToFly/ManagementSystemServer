const router = require('koa-router')()
const userController = require('../controllers/user')

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
// router.post('/api/user/updatePossword', userController.updatePossword) // 用户注册


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
