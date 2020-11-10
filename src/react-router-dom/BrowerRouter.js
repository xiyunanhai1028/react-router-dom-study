/*
 * @Author: dfh
 * @Date: 2020-10-26 21:49:34
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 09:22:29
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/react-router-dom/BrowerRouter.js
 */
import React, { Component } from 'react'
import Context from './Context'
export default class HashRouter extends Component {
    state = {
        location: {
            pathname: window.location.hash.slice(1),
            state: null
        }
    }

    componentDidMount() {
        window.location.hash = window.location.hash || '/'
        window.addEventListener('hashchange', () => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.hash.slice(1),
                    state: this.locationState
                }
            })
        })
    }

    render() {
        const { location } = this.state
        const value = {
            location,
            history: {
                push: (to) => {
                    if (typeof to === 'object') {
                        const { path, state } = to
                        this.locationState = state
                        window.location.hash = path

                    } else {
                        this.locationState = null
                        window.location.hash = to
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
