import React from "react";
import{ Tabs  } from 'antd'

const TabPane = Tabs.TabPane;


export default class GlobelEchartTab extends React.Component{

    render(){
        return(
            <Tabs  type="card" //size="large" 
            >
            <TabPane tab="样式" key="tab_style">
                <h2>全局样式配置</h2>
            </TabPane>
            <TabPane tab="交互" key="tab_interact">功能正在努力开发中......</TabPane>
            </Tabs>
        )
    }
}