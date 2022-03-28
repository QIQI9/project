let Mock = require('mockjs')

let data = Mock.mock({
   "title|10": [{
      "image": "@image('704x528','@color')",
      "title": "@ctitle",
     
   }]
})

Mock.mock('/api/hailuo1', 'get', (config) => {
   return data
})