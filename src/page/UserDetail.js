/*
 * @Author: dfh
 * @Date: 2020-10-28 14:50:44
 * @LastEditors: dfh
 * @LastEditTime: 2020-10-28 15:26:11
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/page/UserDetail.js
 */
import React, { Component } from 'react'
import { Descriptions } from 'antd';
import storage from '../storage';

export default class UserDetail extends Component {
    state = {
        user: {
            id: '',
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        console.log(this.props)
        const { state } = this.props.location
        let user = null
        if (state && state.user) {
            user = state.user
        } else {
            const { id } = this.props.match.params
            user = storage.queryUserFromId(id)
        }
        this.setState({ user })
    }
    render() {
        const { user } = this.state
        return (
            <Descriptions title="用户信息">
                <Descriptions.Item label="用户ID">{user.id}</Descriptions.Item>
                <Descriptions.Item label="用户名">{user.username}</Descriptions.Item>
                <Descriptions.Item label="用户密码">{user.password}</Descriptions.Item>
            </Descriptions>
        )
    }
}
