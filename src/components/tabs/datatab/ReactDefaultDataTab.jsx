import React, { Component } from "react";
import { Collapse, Form, Select, Input, Table } from 'antd'
import { is } from "immutable";
import { convertTypeToName } from '../utils';


const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;
const { TextArea } = Input;
const { Column } = Table;



export default class ReactDefaultDataTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '静态数据',
            payload: this.props.payload,
        }


    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const nextPropsPayload = nextProps.payload, prevStatePayload = prevState.payload;
        if (nextPropsPayload.key !== prevState.key || !is(prevStatePayload.option, nextPropsPayload.option)) {
            return {
                payload: nextProps.payload,
            }
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        const propsPayload = this.props.payload
            , statePayload = this.state.payload
            , nextPropsPayload = nextProps.payload
            , nextStatePayload = nextState.payload;

        if (propsPayload.key !== nextPropsPayload.key || !is(propsPayload.option, nextPropsPayload.option)) {
            return true;
        }

        if (statePayload.key !== nextStatePayload.key || !is(statePayload.option, nextStatePayload.option)) {
            return true;
        }

        return false;
    }

    onUpdateData = () => {

    }

    onSelectChange(selectedValue, option) {
        switch (selectedValue) {
            case '静态数据':
                return (<TextArea

                    autosize={true}
                    onChange={e => this.onUpdateData(e.target.value)}
                    defaultValue={JSON.stringify(option['series'])}
                />
                );
            case 'CSV文件': return;
            case '数据库': return;
            default: break;
        }
    }

    getDataSource(charttype, option) {
        return charttype === 'BasicPieChart' ? [{
            key: '1',
            field: ' value ',
            illustrate: '系列值'
        }, {
            key: '2',
            field: ' name ',
            illustrate: '系列名'
        }, {
            key: '3',
            field: ' s ',
            illustrate: '系列序号(可选)',
        }] : [{
            key: '1',
            field: ' x ',
            illustrate: option['xAxis']['type'],
        }, {
            key: '2',
            field: ' y ',
            illustrate: option['yAxis']['type'],
        }, {
            key: '3',
            field: ' s ',
            illustrate: '系列(可选)',
        }]
    }

    render() {
        const { charttype } = this.props;
        const charttypeCN = convertTypeToName[charttype];
        const option = this.state.payload.option.toJS();

        // console.log(option, option['series']['data'], charttype === 'BasicPieChart');


        const dataSourceType = ['静态数据', 'CSV文件', '数据库'];
        const formItemLayout = {
            labelCol: { span: 8, offset: 0 },
            wrapperCol: { span: 14 },
        };

        return (
            <Collapse defaultActiveKey={['1']}>
                <Panel header={ charttypeCN + '接口'} key="global_style">
                    <Table
                        dataSource={this.getDataSource(charttype, option)}
                        size='small'
                        pagination={false}
                    >
                        <Column
                            title="字段"
                            dataIndex="field"
                            key="field"
                        />
                        <Column
                            title="映射"
                            key="map"
                            render={(text, record) =>
                                <Input onChange={e => console.log(e)} />
                            }
                        />
                        <Column
                            title="说明"
                            dataIndex="illustrate"
                            key="illustrate"
                        />
                        <Column
                            title="状态"
                            dataIndex="state"
                            key="state"
                        />

                    </Table>
                    <Form>
                        <FormItem key="datasource" {...formItemLayout} label="数据源类型" hasFeedback>
                            <Select
                                defaultValue={this.state.selectedValue}
                                onChange={value => this.setState({ selectedValue: value })}
                            >
                                {dataSourceType.map(item => <Option key={item} value={item}>{item}</Option>)}
                            </Select>
                            {this.onSelectChange(this.state.selectedValue, option)}
                        </FormItem>
                    </Form>
                </Panel>
            </Collapse>
        )

    }
}