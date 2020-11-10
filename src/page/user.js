/*
 * @Author: dfh
 * @Date: 2020-10-20 08:26:12
 * @LastEditors: dfh
 * @LastEditTime: 2020-10-28 15:05:24
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/page/user.js
 */
import React, { Component } from 'react'
import { Route, Switch, Link, Redirect } from '../react-router-dom'
import UserAdd from './UserAdd'
import UserList from './UserList'
import { Layout, Menu } from 'antd';
import UserDetail from './UserDetail';

const {  Content, Sider } = Layout;
export default class User extends Component {
    render() {
        return (
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={150} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item><Link to='/user/list'>客户列表</Link></Menu.Item>
                        <Menu.Item><Link to='/user/add'>添加客户</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Switch>
                        <Route path='/user/list' component={UserList} />
                        <Route path='/user/add' component={UserAdd} />
                        <Route path='/user/detail/:id' component={UserDetail} />
                        <Redirect to='/user/list' />
                    </Switch>
                </Content>
            </Layout>

        )
    }
}
