/*
 * @Author: dfh
 * @Date: 2020-10-27 23:15:48
 * @LastEditors: dfh
 * @LastEditTime: 2020-10-28 14:09:32
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/react-router-dom/Switch.js
 */
import React, { Component } from 'react'
import Context from './Context'
import { pathToRegexp } from 'path-to-regexp'

export default class RedirectSwitch extends Component {
    static contextType = Context
    render() {
        const { location: { pathname } } = this.context
        const children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]
        for (let i = 0; i < children.length; i++) {
            const child = children[i]
            const { path = '/', exact = false } = child.props
            const regexp = pathToRegexp(path, [], { end: exact })
            const result = pathname.match(regexp)
            if (result) {
                return child
            }
        }
        return null
    }
}
