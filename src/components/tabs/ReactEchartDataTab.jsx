import React, { Component } from "react";
// import { Collapse, Form, Select, Input, Table } from 'antd'

import ReacrChinaMap2DChartDataTab from './datatab/ReacrChinaMap2DChartDataTab';
import ReactDefaultDataTab from './datatab/ReactDefaultDataTab';
import ReactWordDataTab from './datatab/ReactWordDataTab';







export default class ReactEChartDataTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '静态数据',
            option: this.props.option,
        }

    }



    dispatchDataTab = () => {
        const { charttype } = this.props;
        let dataTabs = {
            BasicChinaMap2DChart: <ReacrChinaMap2DChartDataTab {...this.props} />,
            BasicWordChart: <ReactWordDataTab {...this.props} />,
            default: <ReactDefaultDataTab {...this.props} />,
        }
        console.log(charttype);
        return dataTabs[charttype] || dataTabs['default'];
    }

    render() {
        // const { charttype, actions, payload } = this.props;
        // const data = this.props.option;
        return (
            this.dispatchDataTab(this.props)
        )

    }
}