/*
 * @Author: dfh
 * @Date: 2020-10-20 08:23:00
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 09:17:19
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './page/home'
import User from './page/user'
import Profile from './page/profile'
import { HashRouter as Router, Route } from './react-router-dom'
import { Layout, Menu } from 'antd';
import Login from './page/login'
import Protected from './page/Protected'
import MenuLink from './page/MenuLink'
import './index.css'
import NavHeader from './page/NavHeader'
const { Content, Header } = Layout;
//Path-to-RegExp
ReactDOM.render(
    <Router>
        <Layout>
            <Header className="header">
                <NavHeader/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><MenuLink to='/' exact>首页</MenuLink></Menu.Item>
                    <Menu.Item key="2"><MenuLink to='/user'>客户管理</MenuLink></Menu.Item>
                    <Menu.Item key="3"><MenuLink to='/profile'>个人中心</MenuLink></Menu.Item>
                    <Menu.Item key="4"><MenuLink to='/login'>登录</MenuLink></Menu.Item>
                </Menu>
            </Header>
            <Content>
                <Route path='/' component={Home} exact />
                <Route path='/user' component={User} />
                {/* <Route path='/profile' component={Profile} /> */}
                <Protected path='/profile' component={Profile} />
                <Route path='/login' component={Login} />
            </Content>
        </Layout>
    </Router>
    , document.getElementById('root'))