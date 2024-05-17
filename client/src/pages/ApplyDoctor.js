import { Form, Col, Row, Input, TimePicker, Button } from "antd";
import React from "react";
import Layout from "../components/Layout";

function ApplyDoctor() {

  const onFinish = values => {
    console.log('Success:', values)
  }

  return (
    <Layout>
      <h1 className="page-title">Apply a Doctor</h1>
      <hr />

      <Form layout="vertical" onFinish={onFinish}>
        <h1 className="card-title mt-3">Personal Information</h1>
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="First Name" name="firstname" rules={[{ required: true }]}>
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Last Name" name="lastname" rules={[{ required: true }]}>
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Branch" name="branch" rules={[{ required: true }]}>
              <Input placeholder="LV/GP" />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Specialization" name="specialization" rules={[{ required: true }]}>
              <Input placeholder="MD, DMD, RN" />
            </Form.Item>
          </Col>
    
        </Row>  
      <hr />
      <h1 className="card-title mt-3">Schedule</h1>
      <Row gutter={20}>

          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Day" name="day" rules={[{ required: true }]}>
              <Input placeholder="Monday, Tuesday, etc..." />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Time" name="timings" rules={[{ required: true }]}>
              <TimePicker.RangePicker />
            </Form.Item>
          </Col>
    
        </Row>

      <div className="d-flex justify-content">
        <Button className="primary-button" htmlType='submit'>Submit</Button>
      </div>
      </Form>
    </Layout>
  );
}

export default ApplyDoctor;
