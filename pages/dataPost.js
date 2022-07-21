import Link from "next/link"
import axios from "axios"
import { Button, Form, Input, InputNumber } from 'antd';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import update from "./update"
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
/* eslint-enable no-template-curly-in-string */

const App = () => {
    const[state,setState]=useState([]);
  const onFinish = (values) => {
    console.log(values);
    axios.post("http://localhost:9000/post",values).then(()=>{
        console.log("data posted")
    }).catch(()=>{
        console.log("data errror")
    })
  };
  useEffect(()=>{
    axios.get("http://localhost:9000/read").then((res)=>{
setState(res.data)
console.log(res)
    })
  },[])

const deletdata=(data)=>{
  console.log(data)
 let id=data._id
    axios.delete(`http://localhost:9000/delete/${data}`).then(()=>console.log("deleted"))
}
const update=(data)=>{
  
var all={
name:"rama",sname:"sur"
}
  axios.put(`http://localhost:9000/data/${data}`,all)
  .then(()=>console.log("update"))
  .catch((err)=>console.log("err",err))
  return <update data={data}/>
}

  return (
    <div>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        // value={}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'sname']}
        label="sname"
        rules={[
          {
            type: 'sname',
          },
        ]}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item> */}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    {state.map((data,i)=>{
        return<div key={i}>
       <li> name:    {data.name}</li>
        <li>surname:{data.sname}</li>
        <button onClick={()=>deletdata(data._id)}>delete</button>
              <Link href={{
                          pathname: "/update",
                          query: data, // the data
                        }}
                      >upadte</Link>
        <button onClick={()=>update(data._id)}>update</button>
        </div>
    })}
    </div>
  );
};

export default App;