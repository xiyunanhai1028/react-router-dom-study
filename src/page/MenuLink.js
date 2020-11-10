/*
 * @Author: dfh
 * @Date: 2020-11-09 08:54:18
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 09:02:21
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/page/MenuLink.js
 */
import React, { Component } from 'react'
import { Link, Route } from '../react-router-dom'

export default class MenuLink extends Component {
    render() {
        const { to, exact, children } = this.props
        return (
            <Route to={to} exact={exact} children={
                props => <Link to={to}>{children}</Link>
            } />
        )
    }
}
