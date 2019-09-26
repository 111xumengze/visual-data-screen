import React from 'react';
import HeaderNavi from '../layouts/HeaderNavi'
import { Row, Col } from 'antd'
import ContentLayout from '../layouts/ContentLayout'
import RSiderNavi from '../layouts/RSiderNavi';

// import { Layout as AntdLayout } from 'antd';

// const { Header, Footer, Sider, Content } = AntdLayout;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuFold: true,
    }
    console.log(this.props);
  }

  onMenuFold = () => {
      this.setState({
        isMenuFold: !this.state.isMenuFold,
      })
  }


  render() {
    const { payload, actions, echarts } = this.props;
    console.log(this.props);
    return (
      // <Provider store={store}>
      <div style={{ width: '100%', height: '100%' }}>
        <HeaderNavi actions={actions} onMenuFold={this.onMenuFold}/>
        <Row >
          <Col span={this.state.isMenuFold ? 18 : 24}>
            <ContentLayout actions={actions} payload={payload} echarts={echarts} />
          </Col>
          <Col span={this.state.isMenuFold ? 6 : 0}>
            <RSiderNavi actions={actions} payload={payload} />
          </Col>
        </Row>
        {/* <AntdLayout>
          <Content>
            <MyLayout actions={actions} payload={payload} echarts={echarts} /></Content>
          <Sider>
            <RSiderNavi actions={actions} payload={payload} style={{ width: '280px', height: '100%', backgroundColor: 'red'}}/>
          </Sider>
        </AntdLayout> */}

      </div>
      // </Provider>

    );
  }
}


export default App;
