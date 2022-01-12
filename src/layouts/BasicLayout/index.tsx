
import {FC} from 'react'
import { Link,Redirect } from 'umi';
import ProLayout from '@ant-design/pro-layout';
import Header from './Header'
import Side from './Side'
import Login from '@/pages/login'
const BasicLayout:FC = ({children}) =>{
  let token = localStorage.token
  if(token){
    return <Login />
  }else{
    return <ProLayout
      layout="mix"
      fixSiderbar
      defaultCollapsed
      breakpoint={false}
      headerRender={() => <Header />}
      menuDataRender={() => [
        {
          key: 'index',
          name: '首页',
          path: '/index',
          children: [
            {
              key: 'about',
              name: '关于',
              path: '/about'
            },
            {
              key: 'list',
              name: '列表',
              path: '/list'
            },
            {
              key: 'good',
              name: '商品',
              path: '/good'
            }
          ]
        },
        {
          key: 'pro',
          name: '产品',
          path: '/pro',
          children: [
            {
              key: 'book',
              name: '书本',
              path: '/book'
            },
            {
              key: 'iphone',
              name: '手机',
              path: '/iphone'
            },
            {
              key: 'paper',
              name: '纸张',
              path: '/paper'
            }
          ]
        },
        {
          key: 'login',
          name: '登录',
          path: '/login'
        },
        {
          key: 'register',
          name: '注册',
          path: '/register'
        },
      ]}
      menuItemRender={({ path, name }) => (<Link to={path!}>{name}</Link>)}
    >{children}</ProLayout>
  }
 
}

export default BasicLayout;
