import React, { Component } from 'react';
import { Collapse, Form, Select, InputNumber, Checkbox, Input } from 'antd'
// import DelSeriesIcon from './DelSeriesIcon'
import { formItemLayout, fontStyle, fontFamily, fontWeight, dataverleftAlign } from '../utils';
const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;



export default class ReactDefaultTitleStylePanel extends Component {

    onUpdateData = () => {
        this.props.onUpdateData();
    }
    render() {
        // const { option } = this.props.payload;
        const option = this.props.payload.option.toJS();
        return (
            <Panel
                header={
                    <span>
                        {'标题'}
                        <Checkbox
                            onChange={e => this.onUpdateData("title_show", e.target.checked, 2)}
                            defaultChecked={option['title']['show']}>显示
                        </Checkbox>
                    </span>}
                key="title"
            >
                <Form onSubmit={this.handleSubmit}>
                    <FormItem key="title_left" {...formItemLayout} label="位置" hasFeedback>
                        <Select
                            onChange={value => this.onUpdateData("title_left", value, 2)}
                            defaultValue={option['title']['left']}
                        >
                            {dataverleftAlign.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key="title_text_style" {...formItemLayout} label="主标题" hasFeedback />
                    <FormItem key="title_text" {...formItemLayout} label="主标题名" hasFeedback>
                        <Input defaultValue={option['title']['text']}
                            onChange={e => this.onUpdateData("title_text", e.target.value, 2)}
                        />
                    </FormItem>
                    <FormItem key="title_textStyle_fontStyle" {...formItemLayout} label="字体风格" hasFeedback>
                        <Select
                            onChange={value => this.onUpdateData("title_textStyle_fontStyle", value, 3)}
                            defaultValue={option['title']['textStyle']['fontStyle']}>
                            {fontStyle.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key="title_textStyle_fontFamily" {...formItemLayout} label="字体" hasFeedback>
                        <Select
                            onChange={value => this.onUpdateData("title_textStyle_fontFamily", value, 3)}
                            defaultValue={option['title']['textStyle']['fontFamily']}>
                            {fontFamily.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key="title_textStyle_fontSize" {...formItemLayout} label="字号" hasFeedback>
                        <InputNumber min={1} max={100} step={0.5}
                            onChange={value => this.onUpdateData("title_textStyle_fontSize", value, 3)}
                            defaultValue={option['title']['textStyle']['fontSize']}
                        />
                    </FormItem>
                    <FormItem key="title_textStyle_color" {...formItemLayout} label="字体颜色" hasFeedback>
                        <Input
                            onChange={e => this.onUpdateData("title_textStyle_color", e.target.value, 3)}
                            defaultValue={option['title']['textStyle']['color']} />
                    </FormItem>
                    <FormItem key="title_textStyle_fontWeight" {...formItemLayout} label="字体粗细" hasFeedback>
                        <Select
                            onChange={value => this.onUpdateData("title_textStyle_fontWeight", value, 3)}
                            defaultValue={option['title']['textStyle']['fontWeight']}>
                            {fontWeight.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key="title_subtext_style" {...formItemLayout} label="副标题" hasFeedback />
                    <FormItem key="title_subtext" {...formItemLayout} label="副标题名" hasFeedback>
                        <Input
                            onChange={e => this.onUpdateData("title_subtext", e.target.value, 2)}
                            defaultValue={option['title']['subtext']} />
                    </FormItem>
                    <FormItem key="title_subtextStyle_fontStyle" {...formItemLayout} label="字体风格" hasFeedback>
                        <Select
                            onChange={value => this.onUpdateData("title_subtextStyle_fontStyle", value, 3)}
                            defaultValue={option['title']['subtextStyle']['fontStyle']}>
                            {fontStyle.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key="title_subtextStyle_fontFamily" {...formItemLayout} label="字体" hasFeedback>
                        <Select
                            onChange={value => this.onUpdateData("title_subtextStyle_fontFamily", value, 3)}
                            defaultValue={option['title']['subtextStyle']['fontFamily']}>
                            {fontFamily.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem key="title_subtextStyle_fontSize" {...formItemLayout} label="字号" hasFeedback>
                        <InputNumber min={1} max={100} step={0.5}
                            onChange={value => this.onUpdateData("title_subtextStyle_fontSize", value, 3)}
                            defaultValue={option['title']['subtextStyle']['fontSize']}
                        />
                    </FormItem>
                    <FormItem key="title_subtextStyle_color" {...formItemLayout} label="字体颜色" hasFeedback>
                        <Input
                            onChange={e => this.onUpdateData("title_subtextStyle_color", e.target.value, 3)}
                            defaultValue={option['title']['subtextStyle']['color']} />
                    </FormItem>
                    <FormItem key="title_subtextStyle_fontWeight" {...formItemLayout} label="字体粗细" hasFeedback>
                        <Select
                            onChange={value => this.onUpdateData("title_subtextStyle_fontWeight", value, 3)}
                            defaultValue={option['title']['subtextStyle']['fontWeight']}>
                            {fontWeight.map(item => <Option key={item} value={item}>{item}</Option>)}
                        </Select>
                    </FormItem>
                </Form>
            </Panel>

        )
    }
}