import React, { Component } from "react";
import { Collapse, Form, Select, Input, Button } from 'antd'
import { is } from "immutable";

const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;
const { TextArea } = Input;




function convertFromassembTypeENToCN(type) {
    switch (type) {
        case 'scatter': return '散点层';
        case 'effectScatter': return '带涟漪的散点层';
        case 'heatmap': return '点热力层';
        case 'lines': return '飞线层';
        default: return;
    }
}

export default class ReacrChinaMap2DChartDataTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: '静态数据',
            payload: this.props.payload,
        }
    }


    // /**
    //  * 把易于查阅和理解的json数据转换成地图组件中series系列的json数据
    //  * @param {*} stringdata 易于查阅和理解的json数据
    //  */
    // convertToEchartMapJson(stringdata) {
    //     try {
    //         const jsondata = JSON.parse(stringdata);
    //         var newoption = this.state.option;
    //         //先清空所有系列的data属性对应的值
    //         for (let i in newoption['series'])
    //             newoption['series'][i]['data'] = [];

    //         for (let i in jsondata) {
    //             var s = Number(jsondata[i]['s']);
    //             const item = [jsondata[i]['x'], jsondata[i]['y']];
    //             newoption['series'][s]['data'].push(item);
    //         }
    //         this.setState({
    //             option: newoption
    //         })
    //         this.props.onSubStateChange(newoption);
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }

    // onUpdateData(data, v) {
    //     try {
    //         var newoption = this.state.option;
    //         newoption['series'][v]['data'] = JSON.parse(data);
    //         this.setState({
    //             option: newoption
    //         })
    //         this.props.onSubStateChange(newoption);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    static getDerivedStateFromProps(nextProps, prevState){
        const nextPropsPayload = nextProps.payload, prevStatePayload = prevState.payload;
        if(nextPropsPayload.key !== prevState.key || !is(prevStatePayload.option, nextPropsPayload.option)){
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


    /**
    * 更改数据源类型
    * 这里，由于子组件数据格式差异很大，暂时不进行优化
    * @param {*} selectedValue 要选定的数据源类型
    */
    onSelectChange(selectedValue, v, option) {
        switch (selectedValue) {
            case '静态数据':
                return (<TextArea rows={15} style={{ width: '100%' }} onChange={e => this.onUpdateData(e.target.value, v)}
                    defaultValue={JSON.stringify(this.state.option['series'][v])}
                />
                );
            case 'CSV文件': return;
            case '数据库': return;
            default: break;
        }
    }



    render() {
        const dataSourceType = ['静态数据', 'CSV文件', '数据库'];
        const option = this.state.payload.option.toJS();
        const formItemLayout = {
            labelCol: { span: 8, offset: 0 },
            wrapperCol: { span: 14 },
        };
        console.log(option, option['series']);
        return (
            <Collapse>
                {option['series'].map((seriesItem, v) =>

                    <Panel key={'组件' + v}
                        header={
                            <span>
                                {convertFromassembTypeENToCN(seriesItem['type'])}
                                <Button
                                    type="primary" icon="close-circle" size="small"
                                // onClick={this.onDeleteSeriesAssemb(v)}
                                />
                            </span>
                        }
                    >
                        <FormItem key="datasource" {...formItemLayout} label="数据源类型" hasFeedback>
                            <Select
                                defaultValue={this.state.selectedValue}
                                onChange={value => this.setState({ selectedValue: value })}
                            >
                                {dataSourceType.map(item => <Option key={item} value={item}>{item}</Option>)}
                            </Select>
                            {this.onSelectChange(this.state.selectedValue, v, option)}
                        </FormItem>
                    </Panel>

                )
                }
            </Collapse>
        )

    }
}