import { Button, Form, Input, InputNumber } from 'antd';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const App = () => {
    const router=useRouter()
const all=router.query
  const onFinish = (values) => {
    console.log(all)
    // console.log(values);
    axios.put(`http://localhost:9000/data/${all._id}`,values)
  .then(()=>console.log("update"))
  .catch((err)=>console.log("err",err))
  };


  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name="name"
        label={all.name}
        
        placeholder="Password"
        // value={data.name}
        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="sname"
        label={all.sname}
         rules={[
          {
            type: 'sname',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;