import React from "react";
import ReactDefaultGlobalStylePanel from './panel/ReactDefaultGlobalStylePanel';
import ReactDefaultTitleStylePanel from './panel/ReactDefaultTitleStylePanel';
import 'antd/dist/antd.css';
export default class BasicEChartStyleTab extends React.Component{
    
    render(){
        console.log(this.props);
        return(
            <div>
                <ReactDefaultGlobalStylePanel {...this.props}/>
                <ReactDefaultTitleStylePanel {...this.props}/>
            </div>
        )
    }
}