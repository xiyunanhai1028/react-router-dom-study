/*
 * @Author: dfh
 * @Date: 2020-10-27 23:14:11
 * @LastEditors: dfh
 * @LastEditTime: 2020-10-27 23:15:39
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/react-router-dom/Redirect.js
 */
import React, { Component } from 'react'
import Context from './Context'

export default class Redirect extends Component {
    static contextType = Context
    render() {
        const {history}=this.context
        const {to}=this.props 
        history.push(to)
        return null
    }
}
