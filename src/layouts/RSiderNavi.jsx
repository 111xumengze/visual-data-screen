import React from 'react';
import GlobelEchartTab from '../components/tabs/GlobelEchartTab';
import ReactEchartTab from '../components/tabs/ReactEchartTab';
import { is } from 'immutable';

class RSiderNavi extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            payload: props.payload || '',
        }
        this.rsiderNaviChange = this.rsiderNaviChange.bind(this);
    }

    rsiderNaviChange(e) {
        // this.props
        this.props.actions.rsiderNaviChange(this.state.payload.key || '1', e.target.value);
    }

    // 检查 payload[key]发生变化没有
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.payload !== prevState.payload) {
    //            return {
    //             payload: nextProps.payload || ''
    //           }
    //     }
    //     return null;
    // }

    // shouldComponentUpdate(nextProps = {}, nextState = {}){
    //     const props = this.props, state = this.state;

    //     // if(nextProps.payload === props.payload 
    //     //   && nextProps.payload.option === props.payload.option){
    //     //     return false;
    //     // } 

    //     // if(nextState.payload === state.payload 
    //     //   && nextState.payload.option === state.payload.option){
    //     //     return false;
    //     // } 


    // }
    
    render() {
        const { payload } = this.props;
        console.log(this.state.payload);
        return (
            !payload.key ? <GlobelEchartTab {...this.props}/> : <ReactEchartTab {...this.props}/>
        )
    }
}

export default RSiderNavi;