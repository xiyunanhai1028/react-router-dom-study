/*
 * @Author: dfh
 * @Date: 2020-11-09 08:36:09
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-09 08:53:10
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/page/login.js
 */
import React, { Component } from 'react'
import { Button } from 'antd'

export default class Login extends Component {

    loginHandler=()=>{
        localStorage.setItem('login','true')
        console.log(this.props.location.state)
        if(this.props.location.state){
            this.props.history.push(this.props.location.state.from)
        }else{
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <Button type='primary' onClick={this.loginHandler}>登录</Button>
        )
    }
}
