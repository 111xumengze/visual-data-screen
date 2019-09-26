import { Map } from 'immutable';

export function changeQuery(key, option) {
    return {
      type: 'CHANGE_QUERY',
      payload: {
        key,
        option,//e.target.value.trim()
      }
    };
}
  
export function createEcharts(key, option){
    return {
        type: 'CREATE_ECHARTS',
        payload: {
            key,
            option,//e.target.value.trim()
        }
    }
}

export function removeEcharts(key){
    return {
        type: 'REMOVE_ECHARTS',
        payload: {
            key,
        }
    }
}


export function rsiderNaviChange(key, option){
    return {
        type: 'RSIDERNAVI_CHANGE',
        payload: {
          key,
          option,//e.target.value.trim()
        }
      };
}



const initialState = {
    error: false,
    echarts: Map(),
    payload: '',
}

const SHOW_ECHART_OPTION = 'SHOW_ECHART_OPTION';
const CHANGE_QUERY = 'CHANGE_QUERY';
const RSIDERNAVI_CHANGE = 'RSIDERNAVI_CHANGE';
const CREATE_ECHARTS = 'CREATE_ECHARTS';
const REMOVE_ECHARTS = 'REMOVE_ECHARTS'; 
// const MENU_FOLD = 'MENU_FOLD';

function echartOptions(state = initialState, action){
    console.log(action);
    const { type,  payload } = action;
    console.log(initialState);
    let echarts = initialState.echarts;

    switch(type){
        case SHOW_ECHART_OPTION: {
            return {

            }
        }
        case CHANGE_QUERY: {
            // initialState.echarts.push(payload);
            // initialState.payload = payload;
            const { key, option } = payload;
            // if(initialState.echarts.has(key))
            initialState.echarts = echarts.set(key, option);
            return {
                eventName:type,
                payload: payload,
                echarts: initialState.echarts,
            }
        }

        case RSIDERNAVI_CHANGE: {
            // initialState.echarts.push(payload);
            // initialState.payload = payload;
            const { key, option } = payload;
            // if(initialState.echarts.has(key))
            // initialState.echarts.set(key, option);
            initialState.echarts = echarts.set(key, option);
            return {
                eventName:type,
                payload: payload,
                echarts: initialState.echarts,
            }
        }

        case CREATE_ECHARTS: {
            const { key, option } = payload;
            // initialState.echarts.set(key, option);
            initialState.echarts = echarts.set(key, option);
            return {
                eventName:type,
                payload: payload,
                echarts: initialState.echarts,
            }
        }

        case REMOVE_ECHARTS: {
            const { key } = payload;
            initialState.echarts = echarts.delete(key);
            return {
                eventName:type,
                payload: {
                    key: null,
                    option: Map(),
                },
                echarts: initialState.echarts,
            }
        }
        // case MENU_FOLD: {
        //     return {
        //         eventName: type,
        //     }
        // }
        default:
            return state;
    }
}

export default echartOptions;