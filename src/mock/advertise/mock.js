let Mock = require("mockjs")
let arr = Mock.mock([{
    "list|10": [{
        "imgSrc": "@image('50x50', '@color', '#FFF', 'png', '!')",
        "title": "@cword(1,10)",
        "name": '@csentence(3, 5)'
    }]
}])
Mock.mock("/api/advertise", "get", (config) => {
    return arr
})