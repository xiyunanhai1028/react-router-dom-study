/*
 * @Author: dfh
 * @Date: 2020-10-26 21:49:34
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 11:10:26
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/react-router-dom/BrowerRouter.js
 */
import React, { Component } from 'react'
import Context from './Context'
const oldPushState = window.history.pushState
export default class HashRouter extends Component {
    state = {
        location: {
            pathname: window.location.pathname||'/',
            state: null
        }
    }

    componentDidMount() {
        window.onpopstate = (event) => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.pathname,
                    state: event.state
                }
            })
        }

        //重新pushState
        window.history.pushState = (state, title, pathname) => {
            //调用老的pushState
            oldPushState.call(window.history, state, title, pathname)
            //调用自己写的onpushstate
            window.onpushstate.call(this, state, pathname)
        }

        //自己写的pushState方法
        window.onpushstate = (state, pathname) => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname,
                    state
                }
            })
        }
    }

    render() {
        const { location } = this.state
        const value = {
            location,
            history: {
                push: (to) => {
                    if (typeof to === 'object') {
                        const { path, state } = to
                        //状态，title,路径
                        window.history.pushState(state, '', path)
                    } else {
                        window.history.pushState(null, '', to)
                    }
                }
            }
        }
        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
