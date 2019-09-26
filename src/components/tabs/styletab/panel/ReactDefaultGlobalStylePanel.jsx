import React, { Component } from 'react';
import{   Collapse,  Form, Select,InputNumber, Input   } from 'antd'
// import DelSeriesIcon from './DelSeriesIcon'
import { formItemLayout, fontStyle, fontFamily, fontWeight } from '../utils';
const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;


export default class ReactDefaultGlobalStylePanel extends Component{

    onUpdateData = () => {

    }

    render(){
        const option = this.props.payload.option.toJS();
        return(
            <Panel header="全局样式" key="global_style">
            <Form onSubmit={this.handleSubmit}>
                    <FormItem key="textStyle_fontStyle" {...formItemLayout} label="字体风格" hasFeedback>
                        <Select 
                            onChange={value =>this.onUpdateData("textStyle_fontStyle",value,2) }
                            defaultValue={option['textStyle']['fontStyle']} >
                            {fontStyle.map(item =>  <Option key={item} value={item}>{item}</Option>)}
                        </Select>                            
                    </FormItem>
                    <FormItem key="textStyle_fontFamily" {...formItemLayout} label="字体"   hasFeedback>
                        <Select 
                            onChange={value =>this.onUpdateData("textStyle_fontFamily",value,2) }
                            defaultValue={option['textStyle']['fontFamily']}
                        >
                            {fontFamily.map(item => <Option key={item} value={item}>{item}</Option>)} 
                        </Select>          
                    </FormItem>
                    <FormItem  key="textStyle_fontSize" {...formItemLayout} label="字号" hasFeedback>
                        <InputNumber min={1} max={100} step={0.5} 
                            onChange={value =>this.onUpdateData("textStyle_fontSize",value,2) }
                            defaultValue={option['textStyle']['fontSize']}
                        />
                    </FormItem>
                    <FormItem key="textStyle_color" {...formItemLayout} label="字体颜色"  hasFeedback>
                        <Input defaultValue={option['textStyle']['color']}
                                onChange={e => this.onUpdateData("textStyle_color",e.target.value,2)}
                            />
                    </FormItem>
                    <FormItem key="textStyle_fontWeight" {...formItemLayout} label="字体粗细"   hasFeedback>
                        <Select 
                            onChange={value =>this.onUpdateData("textStyle_fontWeight",value,2) }
                            defaultValue={option['textStyle']['fontWeight']}>
                            {fontWeight.map(item => <Option key={item} value={item}>{item}</Option>)} 
                        </Select>          
                    </FormItem>

            </Form>
        </Panel>
        )
    }
}