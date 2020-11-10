/*
 * @Author: dfh
 * @Date: 2020-11-10 09:18:14
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 13:54:19
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/react-router-dom/withRouter.js
 */
import React from 'react'
import Route from './Route'

export default function (WrappedComponent) {
    return props => <Route component={WrappedComponent} />
}
