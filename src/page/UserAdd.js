/*
 * @Author: dfh
 * @Date: 2020-10-27 23:04:05
 * @LastEditors: dfh
 * @LastEditTime: 2020-10-28 14:57:30
 * @Modified By: dfh
 * @FilePath: /react-route-study/src/page/UserAdd.js
 */
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import storage from '../storage';
const layout = {
    labelCol: {
        span: 2,
    },
    wrapperCol: {
        span: 4,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 4,
    },
};

class UserAdd extends Component {
    onFinish = (values) => {
        console.log('Success:', values);
        storage.addUser({
            id:Date.now(),
            ...values
        })
        this.props.history.push('/user/list')
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    username: '',
                    password: '',
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
              </Button>
                </Form.Item>
            </Form>
        );
    }
}
export default UserAdd
