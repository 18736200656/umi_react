
import React,{Component} from 'react'
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
class Index extends Component {
  constructor(props:any){
    super(props)
    this.state={

    }
  }
  render(): React.ReactNode {
    return (
      <div>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content> {this.props.children}</Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
