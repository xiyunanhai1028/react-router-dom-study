/*
 * @Author: dfh
 * @Date: 2020-11-09 08:37:51
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-09 08:44:08
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/page/Protected.js
 */
import React, { Component } from 'react'
import { Redirect, Route } from '../react-router-dom'

export default class Protected extends Component {
    render() {
        const { component: Component, ...rest } = this.props
        return (
            <Route {...rest} render={
                props =>
                    localStorage.getItem('login')
                        ? <Component {...props} />
                        : <Redirect to={{ path: '/login', state: { from: props.location.pathname } }} />
            } />
        )
    }
}
