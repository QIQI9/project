let Mock = require('mockjs')

Mock.mock('/api/login', 'post', function (config) {
   // console.log(config) //参数
   let obj = JSON.parse(config.body)
   let name = obj.name
   let password = obj.password
   if (name === '12345' && password === '0000') {
      return {
         status: 200,
         message: 'success',
         data: {
            name: '12345',
            password: '0000',
            token: '一条瞎写的token'
         }
      }
   } else {
      return {
         status: 200,
         message: 'fail',
         data: {
            message: '用户密码错误'
         }
      }
   }
})