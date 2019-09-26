const areaChartStyleSeries = {
    name: '',
    type: 'line',
    smooth: true,
    lineStyle: {
        color: '#000',
        width: 2,
        type: 'false',//'solid''dashed' 'dotted'
    },
    areaStyle: {
        color: '#000'
    },
    data: []
};

const barChartStyleSeries = {
    name: '',
    type: 'bar',
    barWidth: '60%',
    itemStyle: {
        color: '#01AAED',
        borderType: 'solid',
        borderWidth: 0,
        borderColor: '#000',
        barBorderRadius: 0,
    },
    data: []
};

const bubbleChartStyleSeries = {
    name: '系列',
    data: [],
    type: 'scatter',
    symbolSize: function (data) {
        return Math.sqrt(data[2]) / 10e2;
    },

    itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
        shadowOffsetX: 0,
        color: 'rgb(251, 118, 123)'
    }
};

const lineChartStyleSeries = {
    name: '',
    type: 'line',
    smooth: true,
    lineStyle: {
        color: '#000',
        width: 2,
        type: 'solid',//'solid''dashed' 'dotted'
    },
    data: []
};

const nagtiveBarChartStyleSeries = {
    name: '',
    type: 'bar',
    stack: null,
    barWidth: null,
    itemStyle: {
        color: '#FF5722',
        borderType: 'solid',
        borderWidth: 0,
        borderColor: '#000',
        barBorderRadius: 0,
    },
    label: {

        show: true,
        position: 'inside'

    },
    data: []
};

const pieChartStyleSeries = {
    name: '',
    type: 'pie',
    radius: ['0%', '65%'],
    center: ['50%', '50%'],
    selectedMode: 'single',

    data: [],
    itemStyle: {
        emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    }
};

const scatterChartStyleSeries = {
    name: '系列',
    data: [],
    type: 'scatter',
    symbolSize: 12,

    itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
        shadowOffsetX: 0,
        color: 'rgb(251, 118, 123)'
    }
};

const defaultChartStyleSeries = {

}


/**将百分数字符串转换成数字
 * @param {*} str 百分数字符串
 */
export function convertToNumber(str) {
    return Number(str.replace("%", ""));
}

//字体风格
export const fontStyle = ['normal', 'italic', 'oblique'];
//字体粗细
export const fontWeight = ['normal', 'bold', 'bolder', 'lighter',
    '100', '200', '300', '400', '500', '600', '700', '800', '900'];
export const fontFamily = ['sans-serif', 'serif', 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei'];


///////////////////////////y轴数据/////////////////////////////
//文字垂直对齐方式，默认自动
export const dataverticalAlign = ['top', 'middle', 'bottom'];//left:'left',

export const dataverleftAlign = ['left', 'center', 'right'];
// const text = (
//     <p style={{ paddingLeft: 24 }}>
//     A dog is a type of domesticated animal.
//     Known for its loyalty and faithfulness,
//     it can be found as a welcome guest in many households across the world.
//     </p>
// );
//const { getFieldDecorator } = this.props.form;
export const formItemLayout = {
    labelCol: { span: 8, offset: 0 },
    wrapperCol: { span: 14 },
};

//坐标轴名字旋转，角度值
export const dataNameRotate = [0, 45, 90];
//console.log('whj:');



/**
 * 将['value' , 'category' , 'time', 'log']显示成对应的['数值型','类目型','时间型','对数型']
 * 默认 '类目型'
 * @param {*} value 坐标轴类型
 */
export function ConvertToDataTypeValue(value) {
    switch (value) {
        case 'value': return '数值型';
        case 'log': return '对数型';
        case 'time': return '时间型';
        default: return '类目型';
    }
}

//数据种类
export const dataType = ['数值型', '类目型', '时间型', '对数型'];

/**
 * 将['数值型','类目型','时间型','对数型']显示成对应的['value' , 'category' , 'time', 'log']
 * 默认 'category'
 * @param {*} value 坐标轴类型
 */
export function ConvertToDataType(type) {
    switch (type) {
        case '数值型': return 'value';
        case '对数型': return 'log';
        case '时间型': return 'time';
        default: return 'category';
    }
}
