import React from 'react';
import { Affix, Slider, Icon } from 'antd';
import { is, Map } from 'immutable';
import ReactScreenLayout from '../components/screen/ReactScreenLayout';
import BasicReactEcharts from '../components/echarts/BasicReactEchart'

class ContentLayout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      payload: props.payload || '',
      echarts: props.echarts || Map(),
      screenWidth: 1200,
      screenHeight: 650,
      transformScale: 1,
    }

    // this.onRemoveItem = this.onRemoveItem.bind(this, key);
    // this.generateLayout = this.generateLayout.bind(this);
  }



  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState);
    console.log(nextProps.echarts !== prevState.echarts);
    // if (nextProps.echarts !== prevState.echarts) {
    if (!is(prevState.echarts, nextProps.echarts)) {
      return {
        payload: nextProps.payload || '',
        echarts: nextProps.echarts || Map(),
      }
    }
    return null;
  }

  shouldComponentUpdate(nextProps = {}, nextState = {}) {
    const props = this.props, state = this.state;
    // if(props.screenWidth !== nextProps.screenWidth 
    //   || props.screenHeight !== nextProps.screenHeight
    //   || props.transformScale !== nextProps.transformScale){
    //     return true;
    // }

    // if(state.screenWidth !== nextState.screenWidth 
    //   || state.screenHeight !== nextState.screenHeight
    //   || state.transformScale !== nextState.transformScale){
    //     return true;
    // }


    if (!is(props.echarts, nextProps.echarts)) {
      return true;
    }

    if (!is(state.echarts, nextState.echarts)) {
      return true;
    }

    return false;

    // if (Object.keys(props).length !== Object.keys(nextProps).length ||
    //   Object.keys(state).length !== Object.keys(nextState).length) {
    //   return true;
    // }

    // console.log(Object.keys(props), Object.keys(nextProps), Object.keys(state)
    // ,Object.keys(nextState));
    // console.log(nextProps.echarts);
    // for(let key in nextProps){
    //   console.log(key);
    // }


    // for (let key in nextProps) {
    //   if (!is(props[key], nextProps[key])) {
    //     return true;
    //   }
    // }

    // for (let key in nextState) {
    //   console.log(state[key] , nextState[key]);
    //   if (state[key] !== nextState[key] || !is(state[key], nextState[key])) {
    //     return true;
    //   }
    // }
    // return false;
  }

  componentDidMount() {
    // // const doc 
    // const new_state = this.state.echarts;
    // new_state.set('1', '123');
    // this.setState({
    //   echarts: new_state,
    //   layout: [1].concat(this.state.layout)
    // })
  }

  onRemoveItem = (key) => () => {
    console.log(key);
    this.props.actions.removeEcharts(key);
  }

  generateLayout = () => {

    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
      // zIndex: 1000,
    };

    let items = [];

    this.state.echarts.forEach((_, key) =>
      items.push(
        <div key={key} style={{ margin: '0 auto' }}>
          <BasicReactEcharts
            style={{ width: '100%', height: '100%' }}
            option={this.state.echarts.get(key)} />

          <div
            style={removeStyle}
            onClick={this.onRemoveItem(key)}
          >
            <Icon type="delete" />
            {/* <img src={Img_ChartDel} alt='图片正在加载'></img> */}
          </div>
        </div>
      )
    )
    return items;
  }

  render() {

    const style = {  height: '650px', width: '100%' }
    console.log(this.props.echarts);
    const { screenHeight, screenWidth, transformScale } = this.state;
    const reactScreenLayoutStyle = {
      backgroundColor: '#2F4056', 
      // marginBottom: '50px',
      overflow: 'scroll',
      width: '100%',
      height: '650px',
      maxWidth: screenWidth,// * transformScale, //'100%',
      maxHeight: screenHeight,// * transformScale,//'650px',//
    }
    return (




      //  {/* <ReactGridScreen className="layout" cols={12} rowHeight={30} width={1200}>
      //         <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }} style={{ backgroundColor: 'gray' }}>a</div>
      //         <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }} style={{ backgroundColor: 'gray' }}>b</div>
      //         <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }} style={{ backgroundColor: 'gray' }}>c</div>
      //       </ReactGridScreen>   */}

      // height: 'calc(100% - 100px)', width:'calc(100% - 280px)' height: '650px', width: '100%'
      <div
        style={style}
      >


        <ReactScreenLayout
          style={reactScreenLayoutStyle}
          // containerWidth={1920}
          // containerHeight={1200}
          transformScale={1}
          width={screenWidth}
          height={screenHeight}
        >
          {this.generateLayout()}
          {/* {this.state.layout.forEach((value, key) => <div key='234'>{value}</div>)} */}
        </ReactScreenLayout>
        <div>

        </div>
        {/* <input
          key='1'
          onChange={this.onChange1}
          // defaultValue={echarts && echarts.get('1') || ''} 
          value={this.state.echarts.get('1')} />input1

                <input
          key='2'
          onChange={this.onChange2}
          // defaultValue={ echarts && echarts.get('2') || ''} 
          value={this.state.echarts.get('2')} />input2 */}

        <Affix offsetTop={0} style={{ position: "fixed", bottom: '20px' }}>
          <Slider defaultValue={100} style={{ width: '100px' }}
            onChange={value => this.setState({ transformScale : 0.01 * value})}
          />
        </Affix>
      </div>

    )
  }
}

export default ContentLayout; 