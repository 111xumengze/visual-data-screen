import React from "react";
import { Tabs } from 'antd'
import  { convertTypeToName }  from './utils';
import ReactEChartStyleTab from './styletab/ReactEChartStyleTab';
import ReactEchartDataTab from './ReactEchartDataTab';
import { List } from 'immutable';

const TabPane = Tabs.TabPane;


export default class ReactEchartTab extends React.Component {
    getEchartData = () => {
        const { payload } = this.props;
        const { key, option } = payload;
        const series = option.get('series');
        const data = Object.keys(series).map(x => series[x]['data']);
        return {
            key,
            data: List(data),
        };
    }
    render() {
        console.log(this.getEchartData());
        const { actions, payload } = this.props;
        const charttype = payload.key.split('_')[0];
        const  charttypeCN  = convertTypeToName[charttype];//convertTypeToName(payload.key.split('_')[0]);
        return (
            <Tabs type="card" //size="large" 
            >
                <TabPane tab="样式" key="tab_style">
                    <h2>{charttypeCN}</h2>
                    <ReactEChartStyleTab  charttype={charttype} actions={actions} payload={payload}/>
                </TabPane>
                <TabPane tab="数据" key="tab_data">
                    <h2>{charttypeCN}</h2>
                    <ReactEchartDataTab charttype={charttype} actions={actions} payload={payload}/>
                </TabPane>
                <TabPane tab="交互" key="tab_interact">功能正在努力开发中......</TabPane>
            </Tabs>
        )
    }
}