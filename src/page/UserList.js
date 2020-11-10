/*
 * @Author: dfh
 * @Date: 2020-10-27 23:03:46
 * @LastEditors: dfh
 * @LastEditTime: 2020-10-28 15:08:26
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/page/UserList.js
 */
import React, { Component } from 'react'
import { Table } from 'antd';
import storage from '../storage';
import { Link } from '../react-router-dom'

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Password',
        dataIndex: 'password',
        key: 'password',
        render: (text, row) => {
            return <Link to={{path:`/user/detail/${row.id}`,state:{user:row}}}>{text}</Link>
        }
    }
];

export default class UserList extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const users = storage.getUserList()
        console.log(users)
        this.setState({ data: users })
    }

    render() {
        return (
            <Table columns={columns} dataSource={this.state.data} />
        )
    }
}
