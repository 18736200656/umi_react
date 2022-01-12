import React,{useState,useEffect} from 'react'
import { getMenu} from '@/services/menu'
import { Menu } from 'antd';
import { history } from 'umi';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const MenuItem = ({ menus}) =>(
  menus.map(item=>{
    item.chilren ? <SubMenu key={item.key} icon={item.icon || <MailOutlined />} title={item.name}>
      <MenuItem menus={item.chilren}/>
    </SubMenu>  
      : <Menu.Item key={item.key} icon={item.icon || <ContainerOutlined />}>
        <span onClick={() => history.push({ pathname: item.name })}>{item.name}</span>
      </Menu.Item>
 })
)
function NavMenu({ collapsed}){
  const [menus,setMenus] = useState([])
  useEffect(()=>{
    getMenu().then(res=>{
      setMenus(res.data)
    })
  },[])
  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}>
      <MenuItem menus={menus}/>
    </Menu>
  )
}

export default NavMenu