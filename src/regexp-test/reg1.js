/*
 * @Author: dfh
 * @Date: 2020-10-27 21:27:34
 * @LastEditors: dfh
 * @LastEditTime: 2020-10-27 21:52:40
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/regexp-test/reg1.js
 */
const { pathToRegexp } = require('path-to-regexp')
let pathName=[]
//end为true精确匹配，false不完全匹配
const regexp = pathToRegexp('/home/:id/:name', pathName,{end:false})
const url='/home/1/zhangshan'
pathName=pathName.map(item=>item.name)
// console.log(pathName)
const [path,...value]=url.match(regexp)
let params={}
for (let i = 0; i < pathName.length; i++) {
    params[pathName[i]]=value[i] 
}
console.log(params)
