import React from "react";
import { Menu, Icon } from 'antd'
import 'antd/dist/antd.css';
import throttle from 'lodash/throttle';
import defaultChartOptions from '../components/echarts/config'
import { Map } from 'immutable';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderNavi extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isMenuFold: this.props.isMenuFold,
            // showpath: {
            //     pathname: '/showdatavpage',
            //     state: { layouts: this.props.layouts }
            // }
        };
        this.onHeaderNaviClick = throttle(this.onHeaderNaviClick, 500)//this.onHeaderNaviClick.bind(this);
        this.onMenuFold = this.onMenuFold.bind(this);

    }

    onHeaderNaviClick = (e) =>{
        let key = e.key + '_' + new Date().valueOf(),
            option = defaultChartOptions[e.key]; 
        option = Map(option);
        this.props.actions.createEcharts(key, option);
    }

    onMenuFold() {
        this.props.onMenuFold();
    }

    render() {

        return (
            <Menu
                theme='dark'
                onClick={this.onHeaderNaviClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <SubMenu title={<span><Icon type="wifi" />DataV</span>}></SubMenu>
                <SubMenu title={<span><Icon type="setting" />常规图表</span>}>
                    <MenuItemGroup title="折线图">
                        <Menu.Item key="BasicLineChart" >基本折线图</Menu.Item>
                        <Menu.Item key="BasicAreaChart">区域图</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="柱状图">
                        <Menu.Item key="BasicBarChart">基本柱状图</Menu.Item>
                        <Menu.Item key="BasicNagtiveBarChart">正负条形图</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="饼状图">
                        <Menu.Item key="BasicPieChart">基本饼状图</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="散点图">
                        <Menu.Item key="BasicScatterChart">散点图</Menu.Item>
                        <Menu.Item key="BasicBubbleChart">气泡图</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span><Icon type="setting" />地图</span>}>
                    <Menu.Item key="BasicChinaMap2DChart" >平面中国地图</Menu.Item>
                    <Menu.Item key="BasicWorldMap2DChart" >平面世界地图</Menu.Item>
                </SubMenu>
                <SubMenu title={<span><Icon type="setting" />指标</span>}>

                </SubMenu>
                <SubMenu title={<span><Icon type="setting" />关系网络</span>}>

                </SubMenu>
                <SubMenu title={<span><Icon type="setting" />文字</span>}>
                    <Menu.Item key="BasicWord" >通用标题</Menu.Item>
                </SubMenu>
                <SubMenu title={<span><Icon type="setting" />其他</span>}>

                </SubMenu>


                <SubMenu title={<span><Icon type={this.props.isMenuFold ? 'menu-fold' : 'menu-unfold'} onClick={this.onMenuFold} /></span>}>
                </SubMenu>
            </Menu>

        );
    }
}



export default HeaderNavi;
