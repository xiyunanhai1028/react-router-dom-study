/*
 * @Author: dfh
 * @Date: 2020-11-10 09:16:39
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 09:17:04
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/page/NavHeader.js
 */
import React, { Component } from 'react'
import { withRouter } from '../react-router-dom'

class NavHeader extends Component {
    render() {
        return (
            <div className="logo" onClick={()=>this.props.history.push('/')}>云融科创</div>
        )
    }
}
export default withRouter(NavHeader)