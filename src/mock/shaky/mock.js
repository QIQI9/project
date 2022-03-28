let Mock = require('mockjs')

let arr = Mock.mock([{
   'list|10-15': [{
      "imgSrc": "@image('200x100', @color(), '#FFF', 'png' )",
      "title": "@cword(10, 20)",
      "text": "@cword(4)",
      "integer": "@integer(1000,2000)",
      "integers": "@integer(1,500)",
      "imgSrc": "@image('100x100', @color(), '#FFF', 'png' )",
      "title": "@cword(10, 20)",
      "text": "@cword(3,4)",
      "names": "@cword(4)",
      "integer": "@integer(1000,2000)",
      // "integers": "@integer(1,500)"

   }]
}])
Mock.mock('/api/shaky', 'get', (config) => {
   return arr
})