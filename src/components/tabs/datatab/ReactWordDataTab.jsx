import React, { Component } from "react";
import { Collapse } from 'antd'


const Panel = Collapse.Panel;


export default class ReactWordDataTab extends Component {

    render() {
        return (
            <Collapse defaultActiveKey={['1']}>
                <Panel header={<span>{this.props.charttype + '接口    无'}</span>} key="global_style">
                </Panel>
            </Collapse>
        )

    }
}