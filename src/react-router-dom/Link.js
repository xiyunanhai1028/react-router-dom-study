/*
 * @Author: dfh
 * @Date: 2020-10-27 22:16:51
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 13:30:42
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/react-router-dom/Link.js
 */
import React, { Component } from 'react'
import Context from './Context'

export default class Link extends Component {
    static contextType=Context
    render() {
        const {history}=this.context
        const {to}=this.props
        return (
            <a onClick={()=>history.push(to)} {...this.props}>
                {this.props.children}
            </a>
        )
    }
}
