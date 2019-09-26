import React, { Component } from 'react';
import { Collapse, Form, Select, InputNumber, Checkbox, Input } from 'antd'
// import DelSeriesIcon from './DelSeriesIcon'
import {
    formItemLayout,
    fontStyle,
    fontFamily,
    fontWeight,
    lineStyleType,
    dataNameRotate,
    dataType,
    ConvertToDataTypeValue,
    ConvertToDataType
} from '../utils';
const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;



export default class ReactXYAxisStylePanel extends Component {

    onUpdateData = () => {
        this.props.onUpdateData();
    }

    onSetXY(axisType) {
        const option = this.props.payload.option.toJS();
        return (
            <Panel
                header={
                    <span>
                        {axisType === 'xAxis' ? 'x轴' : 'y轴'}
                        <Checkbox
                            onChange={e => { this.onUpdateData(axisType + '_show', e.target.checked, 2) }}
                            defaultChecked={option[axisType]['show']}>显示
                    </Checkbox>
                    </span>}
                key={axisType}
            >
                <Form key={"style_" + axisType + "_text"} onSubmit={this.handleSubmit} onChange={this.onFormChange}>
                    <FormItem key={axisType + "_name_config"} {...formItemLayout} label="轴名配置" hasFeedback />
                    <FormItem key={axisType + "_name"} {...formItemLayout} label="名称" hasFeedback>
                        <Input
                            defaultValue={option[axisType]['name']}
                            onChange={e => this.onUpdateData(axisType + '_name', e.target.value, 2)}
                        />
                    </FormItem>
                    <FormItem key={axisType + "_nameTextStyle_fontStyle"} {...formItemLayout} label="字体风格" hasFeedback>
                        <Select
                            defaultValue={option[axisType]['nameTextStyle']['fontStyle']}
                            onChange={e => this.onUpdateData(axisType + "_nameTextStyle_fontStyle", e, 3)}
                        >
                            {fontStyle.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key={axisType + "_nameTextStyle_fontFamily"} {...formItemLayout} label="字体" hasFeedback>
                        <Select
                            defaultValue={option[axisType + '']['nameTextStyle']['fontFamily']}
                            onChange={e => this.onUpdateData(axisType + "_nameTextStyle_fontFamily", e, 3)}
                        >
                            {fontFamily.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key={axisType + "_nameTextStyle_fontSize"} {...formItemLayout} label="字号" hasFeedback>
                        <InputNumber min={1} max={100} step={0.5}
                            defaultValue={option[axisType]['nameTextStyle']['fontSize']}
                            onChange={value => this.onUpdateData(axisType + "_nameTextStyle_fontSize", value, 3)}
                        />
                    </FormItem>
                    <FormItem key={axisType + "_nameTextStyle_color"} {...formItemLayout} label="颜色" hasFeedback>
                        <Input
                            defaultValue={option[axisType]['nameTextStyle']['color']}
                            onChange={e => this.onUpdateData(axisType + "_nameTextStyle_color", e.target.value, 3)}
                        />
                    </FormItem>
                    <FormItem key={axisType + "_nameTextStyle_fontWeight"} {...formItemLayout} label="字体粗细" hasFeedback>
                        <Select
                            defaultValue={option[axisType]['nameTextStyle']['fontWeight']}
                            onChange={value => this.onUpdateData(axisType + "_nameTextStyle_fontWeight", value, 3)}
                        >
                            {fontWeight.map(item => <Option key={axisType + "_text_fontWeight" + item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key={axisType + "_nameRotate"} {...formItemLayout} label="角度" hasFeedback>
                        <Select
                            defaultValue={option[axisType]['nameRotate']}
                            onChange={value => this.onUpdateData(axisType + "_nameRotate", value, 2)}
                        >
                            {dataNameRotate.map(item => <Option key={axisType + "_nameRotate" + item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key={axisType + "_basic_config"} {...formItemLayout} label="基本配置" hasFeedback />

                    <FormItem key={axisType + "_type"}  {...formItemLayout} label="轴类型" hasFeedback>
                        <Select
                            defaultValue={ConvertToDataTypeValue(option[axisType]['type'])}
                            onChange={value => this.onUpdateData(axisType + "_type", ConvertToDataType(value), 2)}
                        >
                            {dataType.map(item => <Option key={axisType + "_tags_dataType" + item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key={axisType + "_offset"} {...formItemLayout} label="位置" hasFeedback>
                        <InputNumber min={1} max={100} step={0.5}
                            defaultValue={option[axisType]['offset']}
                            onChange={value => this.onUpdateData(axisType + "_offset", value, 2)}
                        />
                    </FormItem>
                    <FormItem key={axisType + "_boundaryGap"} {...formItemLayout} label="是否留白" hasFeedback>
                        <Checkbox //this.onUpdateData(axisType+"_boundaryGap",e.target.checked,2)
                            defaultChecked={option[axisType]['boundaryGap']}
                            onChange={e => this.onUpdateData(axisType + "_boundaryGap", e.target.checked, 2)}
                        />
                    </FormItem>

                    <FormItem key={axisType + "_max"} {...formItemLayout} label="最大值" hasFeedback>
                        <InputNumber min={1} max={100} step={0.5}
                            defaultValue={option[axisType]['max']}
                            onChange={value => this.onUpdateData(axisType + "_max", value, 2)}
                        />
                    </FormItem>
                    <FormItem key={axisType + "_min"} {...formItemLayout} label="最小值" hasFeedback>
                        <InputNumber min={1} max={100} step={0.5}
                            defaultValue={option[axisType]['min']}
                            onChange={value => this.onUpdateData(axisType + "_min", value, 2)}
                        />
                    </FormItem>
                </Form>
                <Form key="style_x_tags" onSubmit={this.handleSubmit}>
                    <FormItem key={axisType + "_axisLabel"} {...formItemLayout} label={<span>
                        {'轴标签'}
                        <Checkbox
                            onChange={e => this.onUpdateData(axisType + "_axisLabel_show", e.target.checked, 3)}
                            defaultChecked={option[axisType]['axisLabel']['show']}>显示
                    </Checkbox>
                    </span>}
                        hasFeedback
                    />
                    <FormItem key={axisType + "_axisLabel_rotate"} {...formItemLayout} label="角度" hasFeedback>
                        <Select defaultValue={option[axisType]['axisLabel']['rotate']}
                            onChange={value => this.onUpdateData(axisType + "_axisLabel_rotate", value, 3)}
                        >
                            {dataNameRotate.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key={axisType + "_axisLabel_fontStyle"} {...formItemLayout} label="字体风格" hasFeedback>
                        <Select
                            defaultValue={option[axisType]['axisLabel']['fontStyle']}
                            onChange={value => this.onUpdateData(axisType + "_axisLabel_fontStyle", value, 3)}
                        >
                            {fontStyle.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key={axisType + "_axisLabel_fontFamily"} {...formItemLayout} label="字体" hasFeedback>
                        <Select
                            defaultValue={option[axisType + '']['axisLabel']['fontFamily']}
                            onChange={value => this.onUpdateData(axisType + "_axisLabel_fontFamily", value, 3)}
                        >
                            {fontFamily.map(item => <Option key={axisType + "_text_fontFamily" + item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key={axisType + "_axisLabel_fontSize"} {...formItemLayout} label="字号" hasFeedback>
                        <InputNumber min={1} max={100} step={0.5}
                            defaultValue={option[axisType]['nameTextStyle']['fontSize']}
                            onChange={value => this.onUpdateData(axisType + "_axisLabel_fontSize", value, 3)}
                        />
                    </FormItem>
                    <FormItem key={axisType + "_axisLabel_color"} {...formItemLayout} label="颜色" hasFeedback>
                        <Input
                            onChange={e => this.onUpdateData(axisType + "_axisLabel_color", e.target.value, 3)}
                            defaultValue={option[axisType]['axisLabel']['color']}
                        />
                    </FormItem>
                    <FormItem key={axisType + "_axisLabel_fontWeight"} {...formItemLayout} label="字体粗细" hasFeedback>
                        <Select
                            defaultValue={option[axisType]['axisLabel']['fontWeight']}
                            onChange={value => this.onUpdateData(axisType + "_axisLabel_fontWeight", value, 3)}
                        >
                            {fontWeight.map(item => <Option key={axisType + "_text_fontWeight" + item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key={axisType + "_axisLine"} {...formItemLayout} label={<span>
                        {'轴线'}
                        <Checkbox
                            onChange={e => this.onUpdateData(axisType + "_axisLine_show", e.target.checked, 3)}
                            defaultChecked={option[axisType]['axisLine']['show']}>显示
                </Checkbox>
                    </span>}
                        hasFeedback
                    />
                    <FormItem key={axisType + "_axisLine_lineStyle_color"} {...formItemLayout} label="颜色" hasFeedback>
                        <Input defaultValue={option[axisType]['axisLine']['lineStyle']['color']}
                            onChange={e => this.onUpdateData(axisType + "_axisLine_lineStyle_color", e.target.value, 4)}
                        />
                    </FormItem>
                    <FormItem key={axisType + "_splitLine"} {...formItemLayout} label={<span>
                        {'分割线'}
                        <Checkbox
                            onChange={e => this.onUpdateData(axisType + "_splitLine_show", e.target.checked, 3)}
                            defaultChecked={option[axisType]['splitLine']['show']}>显示
                </Checkbox>
                    </span>}
                        hasFeedback
                    />
                    <FormItem key={axisType + "_splitLine_lineStyle_type"} {...formItemLayout} label="类型" hasFeedback>
                        <Select
                            defaultValue={option[axisType]['splitLine']['lineStyle']['type']}
                            onChange={value => this.onUpdateData(axisType + "_splitLine_lineStyle_type", value, 4)}
                        >
                            {lineStyleType.map(item => <Option key={axisType + "_splitLine_lineStyle_type" + item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                </Form>
            </Panel>
        )
    }

    render() {
        return(
            ['xAxis', 'yAxis'].map(value => this.onSetXY(value))
        )
    }
}
