import React from 'react'
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import actions, { changeQuery, rsiderNaviChange, createEcharts, removeEcharts } from '../redux/EChartRedux';
import App from './App'
let store = createStore(actions);  //let store = createStore(myApp);

/**
 * 分发组件的状态，交由redux实现
 * @param {*} state 状态
 */
function mapStateToProps(state) {
  console.log(state);
  return {
    eventName: state.eventName,
    payload: state.payload,
    echarts: state.echarts,
  }
}

/**
 * 分发组件的行为，交由redux实现
 * @param {*} dispatch 行为
 */
// function mapDispatchToProps(dispatch){
//     return{
//         actions : bindActionCreators({ChangeText: null }, dispatch)
//     }
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      changeQuery, rsiderNaviChange, createEcharts, removeEcharts
    },
      dispatch)
  }
}

let MyApp = connect(mapStateToProps, mapDispatchToProps)(App)

class ProviderApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    )
  }
}

export default ProviderApp;