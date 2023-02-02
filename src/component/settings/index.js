import { Col, Form, Input, Row, DatePicker, Button } from 'antd'
import React, { useState } from 'react'

const { RangePicker } = DatePicker;

const Settings = () => {
    const [color, setColor] = useState('#000000');

    const onFinish = (values) => {
        console.log('Settings:', values);
    };

    return (
        <div>
            <Form onFinish={onFinish}>
                <Row justify="space-around">
                    <Col span={10}>
                        <Form.Item
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input title!',
                                },
                            ]}
                        >
                            <label>Title</label>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    message: "Email doesn't exist"
                                },
                                {
                                    required: true,
                                    message: "Please input Email"
                                }
                            ]}
                        >
                            <label>Email</label>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify="space-around">
                    <Col span={10}>
                        <label>Background color</label>
                        <Input value="Text Color" style={{ color: `${color}`, fontWeight: '900' }} />
                        <Form.Item name='background color'>
                            <Input type="color" style={{ width: "10%" }} value={color} onChange={(e) => setColor(e.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item
                            name='date'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input date!',
                                },
                            ]}
                        >
                            <label>Date</label>
                            <RangePicker style={{ width: "100%" }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row justify={'center'}>
                    <Form.Item>
                        <Button htmlType='submit'>Save</Button>
                    </Form.Item>
                </Row>
            </Form>

        </div>
    )
}

export default Settings
