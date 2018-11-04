const router = require('koa-router')()

let mysql = require('mysql')
const db_config = {
  host: 'localhost',
  password: '111111',
  user: 'root',
  port: '3306',
  database: 'mydatabase'
}

let connect = mysql.createConnection(db_config)

// 开始连接数据库
connect.connect(function(err) {
  if (err) {
    console.log(`mysql连接失败：${err}`)
  } else {
    console.log('mysql连接成功！')
  }
})

let result = []
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

// 查询成功后关闭mysql
function closeMysql(connect) {
  connect.end((err) => {
    if (err) {
      console.log(`mysql关闭失败： ${err}!`)
    } else {
      console.log('mysql关闭成功！')
    }
  })
}

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})


module.exports = router
