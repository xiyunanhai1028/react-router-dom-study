/*
 * @Author: dfh
 * @Date: 2020-10-28 14:12:33
 * @LastEditors: dfh
 * @LastEditTime: 2020-10-28 15:25:27
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/storage.js
 */
const storage = {
    getUserList: () => {
        const users = localStorage.getItem('userList')
        return users ? JSON.parse(users) : []
    },
    addUser: (user) => {
        let oldUsers = storage.getUserList()
        oldUsers.push(user)
        localStorage.setItem('userList', JSON.stringify(oldUsers))
    },
    queryUserFromId:(id)=>{
        return storage.getUserList().find(item=>item.id==id)
    }
}
export default storage