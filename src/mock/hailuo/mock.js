let Mock = require('mockjs')

let data = Mock.mock({
   "list|10": [{
      "image": "@image('704x528','@color')",
      "title": "@ctitle",
     
   }]
})

Mock.mock('/api/hailuo', 'get', (config) => {
   return data
})