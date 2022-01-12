import React,{Component} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

class Login extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  onFinish(values){
    console.log('Success:', values);
  }
  onFinishFailed(errorInfo){
    console.log('Failed:', errorInfo);
  }
  render(){
    return(
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off">
          <Form.Item
            label="用户名"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>记住账号</Checkbox>
          </Form.Item>         
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default Login