import { FC,useState, useEffect,useLayoutEffect } from 'react'
import { history } from 'umi';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import { getMenu } from '@/services/menu'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const MenuItem: FC = ({ menus}) => (
    menus.map((item:any) => {
      item.chilren ? <SubMenu key={item.key} icon={item.icon || <MailOutlined />} title={item.name}>
        <MenuItem menus={item.children} />
      </SubMenu>
        : <Menu.Item key={item.key} icon={item.icon || <PieChartOutlined />}>
          <span onClick={() => history.push({ pathname: item.name })}>{item.name}</span>
      </Menu.Item>
    })
  )
function NavMenu()  {
  const [menus,setMenus] = useState([])
  useEffect(() => {
    getData()
  }, [])
  const getData = async () =>{
    let {data} = await getMenu()
    setMenus(data)
    // return data
  }
  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark">
      <MenuItem menus={menus} />
    </Menu>
  )
}

export default NavMenu