
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { is } from 'immutable';

class BasicReactEchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      option: this.props.option,
    }

  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (!is(prevState.option, nextProps.option)) {
      return {
        option: nextProps.option,
      }
    }
    return null;
  }

  componentDidMount() {

    let echarts_instance = this.echarts_react.getEchartsInstance();
    echarts_instance.getZr().on('click', params => {
      const pointInPixel = [params.offsetX, params.offsetY];
      if (echarts_instance.containPixel('grid', pointInPixel)) {
        //let xIndex=echarts_instance.convertFromPixel({seriesIndex:0},[params.offsetX, params.offsetY])[0];
        //事件处理代码书写位置

        //let option=echarts_instance.getOption();
        // this.props.callOption(this.props.id,this.state.option); 
        //this.props.callOption(JSON.stringify(this.state.option)); 
      }
    });

  }


  shouldComponentUpdate(nextProps = {}, nextState = {}) {
    const props = this.props, state = this.state;
    if (!is(props.option, nextProps.option)) {
      return true;
    }

    if (!is(state.option, nextState.option)) {
      return true;
    }

    return false;
  }

  getOption = () => {
    return this.state.option.toJS();
  }

  render() {
    return (
      <ReactEcharts
        ref={(e) => { this.echarts_react = e; }}
        option={this.getOption()}
        style={this.props.style}
        className='react_for_echarts'
      />
    );
  }
}


export default BasicReactEchart;