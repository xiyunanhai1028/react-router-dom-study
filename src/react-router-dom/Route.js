/*
 * @Author: dfh
 * @Date: 2020-10-26 21:53:16
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-09 09:01:17
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/react-router-dom/Route.js
 */
import React, { Component } from 'react'
import { pathToRegexp } from 'path-to-regexp'
import Context from './Context'

export default class Router extends Component {
    static contextType = Context
    render() {
        const { pathname } = this.context.location
        const { path = '/', component: Component, exact = false, render, children } = this.props
        let paramsName = []
        const regexp = pathToRegexp(path, paramsName, { end: exact })
        paramsName = paramsName.map(item => item.name)
        const result = pathname.match(regexp)
        const props = {
            location: this.context.location,
            history: this.context.history
        }
        if (result) {
            const [url, ...value] = result
            let params = {}
            for (let i = 0; i < paramsName.length; i++) {
                params[paramsName[i]] = value[i]
            }
            props.match = {
                path,
                url,
                params,
                isExact: pathname === url
            }
            if (Component) {
                return <Component {...props} />
            } else if (render) {
                return render(props)
            } else if (children) {
                return children(props)
            } else {
                return null
            }
        } else {
            if (children) {
                return children(props)
            } else {
                return null
            }
        }
        return null
    }
}
