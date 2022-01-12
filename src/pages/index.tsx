import styles from './global.less';
import {Button} from 'antd'
import { history  } from 'umi';
import React, { useState, useEffect } from 'react'
import NavMenu from './components/navMenu'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
export default function IndexPage() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      {collapsed ? <MenuUnfoldOutlined onClick={() => setCollapsed(false)} />
        : <MenuFoldOutlined onClick={() => setCollapsed(true)} />}
      <h1 className={styles.title}>首页</h1>
      <NavMenu collapsed={collapsed}/>
      <Button type='primary' onClick={() => history.push('/login')} style={{marginRight:'20px'}}>登录</Button>
      <Button type='primary' onClick={() => history.push('/register')}>注册</Button>
    </div>
  );
}
