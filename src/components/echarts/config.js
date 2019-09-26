import "echarts/map/js/china.js";

const BasicBarChart = {
    textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
    },
    title: {
        show: false,
        text: '',
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 18,
        },
        subtext: '',
        subtextStyle: {
            color: '#aaa',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left: 'left',
    },
    legend: {
        show: true,
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left: 'auto',//'left' 'center' 'right'
        top: 'auto',//'top', 'middle', 'bottom'
    },
    xAxis: {
        show: true,//是否显示 x轴
        //   position :  ,
        offset: 0,//x 轴的位置
        type: 'category',//坐标轴类型
        name: null,//x 轴名称
        //nameGap:null,//坐标轴名称与轴线之间的距离
        boundaryGap: true,
        nameTextStyle: {
            color: '#fff',//y 轴名称文字字体的风格
            fontStyle: 'normal',//坐标轴名称文字字体的风格
            fontWeight: 'normal',//坐标轴名称文字字体的粗细
            fontFamily: 'sans-serif',//坐标轴名称文字的字体系列
            fontSize: 12,//字体大小
        },

        nameRotate: 0,//坐标轴名字旋转，角度值
        min: null,//坐标轴刻度最小值
        max: null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel: {
            show: true,
            rotate: 0,//水平:0 斜角:45 垂直:90
            color: '#fff',//y 轴名称文字字体的风格
            fontStyle: 'normal',//坐标轴名称文字字体的风格
            fontWeight: 'normal',//坐标轴名称文字字体的粗细
            fontFamily: 'sans-serif',//坐标轴名称文字的字体系列
            fontSize: 8,//字体大小
        },
        //////////////////轴线相关配置////////////////////////
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333'
            }
        },

    },
    yAxis: {
        show: true,//是否显示 y轴
        //   position :  ,
        offset: 0,//y 轴的位置
        type: 'value',//坐标轴类型
        name: null,//y 轴名称
        boundaryGap: true,
        //nameGap:null,//坐标轴名称与轴线之间的距离
        nameTextStyle: {
            color: '#fff',//y 轴名称文字字体的风格
            fontStyle: 'normal',//坐标轴名称文字字体的风格
            fontWeight: 'normal',//坐标轴名称文字字体的粗细
            fontFamily: 'sans-serif',//坐标轴名称文字的字体系列
            fontSize: 12,//字体大小
        },

        nameRotate: 0,//坐标轴名字旋转，角度值
        min: null,//坐标轴刻度最小值
        max: null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel: {
            show: true,
            rotate: 0,//水平:0 斜角:45 垂直:90
            color: '#fff',//y 轴名称文字字体的风格
            fontStyle: 'normal',//坐标轴名称文字字体的风格
            fontWeight: 'normal',//坐标轴名称文字字体的粗细
            fontFamily: 'sans-serif',//坐标轴名称文字的字体系列
            fontSize: 8,//字体大小
        },
        //////////////////轴线相关配置////////////////////////
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333'
            }
        },
    },
    series: [
        {
            name: '销量',
            type: 'bar',
            barWidth: '60%',
            itemStyle: {
                color: '#01AAED',
                borderType: 'solid',
                borderWidth: 0,
                borderColor: '#000',
                barBorderRadius: 0,
            },
            data: [["系列一", 5], ["系列二", 20], ["系列三", 36], ["系列四", 10], ["系列五", 10], ["系列六", 20]]
        }
    ]
}

const BasicLineChart = {
    textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
    },
    title: {
        show: false,
        text: '',
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 18,
        },
        subtext: '',
        subtextStyle: {
            color: '#aaa',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left: 'left',
    },
    legend: {
        show: true,
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left: 'auto',//'left' 'center' 'right'
        top: 'auto',//'top', 'middle', 'bottom'
    },
    xAxis: {
        show: true,//是否显示 x轴
        //   position :  ,
        offset: 0,//x 轴的位置
        type: 'category',//坐标轴类型
        name: null,//x 轴名称
        //nameGap:null,//坐标轴名称与轴线之间的距离
        boundaryGap: true,
        nameTextStyle: {
            color: '#fff',//y 轴名称文字字体的风格
            fontStyle: 'normal',//坐标轴名称文字字体的风格
            fontWeight: 'normal',//坐标轴名称文字字体的粗细
            fontFamily: 'sans-serif',//坐标轴名称文字的字体系列
            fontSize: 12,//字体大小
        },

        nameRotate: 0,//坐标轴名字旋转，角度值
        min: null,//坐标轴刻度最小值
        max: null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel: {
            show: true,
            rotate: 0,//水平:0 斜角:45 垂直:90
            color: '#fff',//y 轴名称文字字体的风格
            fontStyle: 'normal',//坐标轴名称文字字体的风格
            fontWeight: 'normal',//坐标轴名称文字字体的粗细
            fontFamily: 'sans-serif',//坐标轴名称文字的字体系列
            fontSize: 8,//字体大小
        },
        //////////////////轴线相关配置////////////////////////
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333'
            }
        },

    },
    yAxis: {
        show: true,//是否显示 y轴
        //   position :  ,
        offset: 0,//y 轴的位置
        type: 'value',//坐标轴类型
        name: null,//y 轴名称
        boundaryGap: true,
        //nameGap:null,//坐标轴名称与轴线之间的距离
        nameTextStyle: {
            color: '#fff',//y 轴名称文字字体的风格
            fontStyle: 'normal',//坐标轴名称文字字体的风格
            fontWeight: 'normal',//坐标轴名称文字字体的粗细
            fontFamily: 'sans-serif',//坐标轴名称文字的字体系列
            fontSize: 12,//字体大小
        },

        nameRotate: 0,//坐标轴名字旋转，角度值
        min: null,//坐标轴刻度最小值
        max: null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel: {
            show: true,
            rotate: 0,//水平:0 斜角:45 垂直:90
            color: '#fff',//y 轴名称文字字体的风格
            fontStyle: 'normal',//坐标轴名称文字字体的风格
            fontWeight: 'normal',//坐标轴名称文字字体的粗细
            fontFamily: 'sans-serif',//坐标轴名称文字的字体系列
            fontSize: 8,//字体大小
        },
        //////////////////轴线相关配置////////////////////////
        axisLine: {
            show: true,
            lineStyle: {
                color: '#333'
            }
        },
    },
    series: [{
        name: '',
        type: 'line',
        smooth: true,
        lineStyle: {
            color: '#000',
            width: 2,
            type: 'solid',//'solid''dashed' 'dotted'
        },

        data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
    },
    ]
}

const BasicPieChart = {
    textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
    },
    title:{
        show:false,
        text:'',
        textStyle:{
            color:'#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 18,
        },
        subtext:'',
        subtextStyle:{
            color:'#aaa',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left:'left',
    },
    legend:{
        show:true,
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left: 'center',//'left' 'center' 'right'
        top: 'bottom',//'top', 'middle', 'bottom'
        //bottom: 10,
    },
    series: [ {
        name:'',
        type: 'pie',
        radius : ['0%','65%'],
        center: ['50%', '50%'],
        selectedMode: 'single',
   
        data:[
            {value:1548,name: '幽州'},
            {value:535, name: '荆州'},
            {value:510, name: '兖州'},
            {value:634, name: '益州'},
            {value:735, name: '西凉'}
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }
    ]
}

const BasicAreaChart = {
    textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
    },
    title:{
        show:false,
        text:'',
        textStyle:{
            color:'#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 18,
        },
        subtext:'',
        subtextStyle:{
            color:'#aaa',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left:'left',
    },
    legend:{
        show:true,
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left: 'auto',//'left' 'center' 'right'
        top: 'auto',//'top', 'middle', 'bottom'
    },
    xAxis:{
        show : true,//是否显示 x轴
        //   position :  ,
        offset :0,//x 轴的位置
        type : 'category',//坐标轴类型
        name :null,//x 轴名称
        //nameGap:null,//坐标轴名称与轴线之间的距离
        boundaryGap:true,
        nameTextStyle:{
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:12,//字体大小
        },
    
        nameRotate:0,//坐标轴名字旋转，角度值
        min:null,//坐标轴刻度最小值
        max:null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel:{
            show:true,
            rotate:0,//水平:0 斜角:45 垂直:90
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:8,//字体大小
        },
        //////////////////轴线相关配置////////////////////////
        axisLine:{
            show:true,
            lineStyle:{
                color:'#333'
            }
        },
    
    },
    yAxis:{
        show : true,//是否显示 y轴
        //   position :  ,
        offset :0,//y 轴的位置
        type : 'value',//坐标轴类型
        name :null,//y 轴名称
        boundaryGap:true,
        //nameGap:null,//坐标轴名称与轴线之间的距离
        nameTextStyle:{
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:12,//字体大小
        },
    
        nameRotate:0,//坐标轴名字旋转，角度值
        min:null,//坐标轴刻度最小值
        max:null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel:{
            show:true,
            rotate:0,//水平:0 斜角:45 垂直:90
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:8,//字体大小
        },
        //////////////////轴线相关配置////////////////////////
        axisLine:{
            show:true,
            lineStyle:{
                color:'#333'
            }
        },
    },
    series: [
        {
            name:'',
            type: 'line',
            smooth: true,
            lineStyle: {
                color: '#000',
                width: 2,
                type: 'solid',//'solid''dashed' 'dotted'
            },
            areaStyle: {
                color:'#01AAED'
            },
            data: [['Mon',820], ['Tue',932], ['Wed',901], ['Thu',934], ['Fri',1290], ['Sat',1330], ['Sun',1320]]
    }
    ]
} 

const BasicNagtiveBarChart = {
    textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
    },
    title:{
        show:false,
        text:'',
        textStyle:{
            color:'#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 18,
        },
        subtext:'',
        subtextStyle:{
            color:'#aaa',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left:'left',
    },
    legend:{
        show:true,
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left: 'auto',//'left' 'center' 'right'
        top: 'auto',//'top', 'middle', 'bottom'
    },
    xAxis:{
        show : true,//是否显示 x轴
        //   position :  ,
        offset :0,//x 轴的位置
        type : 'value',//坐标轴类型
        name :null,//x 轴名称
        //nameGap:null,//坐标轴名称与轴线之间的距离
        boundaryGap:true,
        nameTextStyle:{
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:10,//字体大小
        },
    
        nameRotate:0,//坐标轴名字旋转，角度值
        min:null,//坐标轴刻度最小值
        max:null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel:{
            show:true,
            rotate:0,//水平:0 斜角:45 垂直:90
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:8,//字体大小
        },
        //////////////////轴线相关配置////////////////////////
        axisLine:{
            show:true,
            lineStyle:{
                color:'#333'
            }
        },
    
    },
    yAxis:{
        show : true,//是否显示 y轴
        //   position :  ,
        offset :0,//y 轴的位置
        type : 'category',//坐标轴类型
        name :null,//y 轴名称
        boundaryGap:true,
        //nameGap:null,//坐标轴名称与轴线之间的距离
        nameTextStyle:{
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:10,//字体大小
        },
    
        nameRotate:0,//坐标轴名字旋转，角度值
        min:null,//坐标轴刻度最小值
        max:null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel:{
            show:true,
            rotate:0,//水平:0 斜角:45 垂直:90
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:8,//字体大小
        },
        //////////////////轴线相关配置////////////////////////
        axisLine:{
            show:true,
            lineStyle:{
                color:'#333'
            }
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    series: [
        {
             name:'利润',
             type:'bar',
             barWidth:null,
             stack:null,
             itemStyle:{
                color:'#01AAED' ,
                borderType:'solid',
                borderWidth:0,
                borderColor:'#000',
                barBorderRadius:0,
            },
             label: {
           
                     show: true,
                     position: 'inside'
             
             },
             
             data:[[200,'系列一'], [170,'系列二'], [240,'系列三'], [244,'系列四'], [200,'系列五']]
         },
         {
             name:'收入',
             type:'bar',
             stack: '总量',
             barWidth:null,
             itemStyle:{
                color:'#FFB800' ,
                borderType:'solid',
                borderWidth:0,
                borderColor:'#000',
                barBorderRadius:0,
            },
             label: {
               
                     show: true,
                     position:'inside',
               
             },
             data:[[320,'系列一'], [302,'系列二',], [341,'系列三',], [374,'系列四',], [390,'系列五',]]
         },
         {
             name:'支出',
             type:'bar',
             stack: '总量',
             barWidth:null,
             itemStyle:{
                color:'#FF5722' ,
                borderType:'solid',
                borderWidth:0,
                borderColor:'#000',
                barBorderRadius:0,
            },
             label: {
              
                     show: true,
                     position: 'left'
              
             },
             data:[[-120,'系列一',], [-132,'系列二',], [-134,'系列三',], [-190,'系列四',], [-210,'系列五',]]
         }
    ]
} 

const BasicBubbleChart = {
    textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
    },
    title:{
        show:false,
        text:'1990 与 2015 年各国家人均寿命与 GDP',
        textStyle:{
            color:'#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 18,
        },
        subtext:'',
        subtextStyle:{
            color:'#aaa',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left:'left',
    },
    legend:{
        show:true,
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left: 'auto',//'left' 'center' 'right'
        top: 'auto',//'top', 'middle', 'bottom'
    },
    xAxis:{
        show : true,//是否显示 x轴
        //   position :  ,
        offset :0,//x 轴的位置
        type : 'value',//坐标轴类型
        name :null,//x 轴名称
        //nameGap:null,//坐标轴名称与轴线之间的距离
        boundaryGap:true,
        nameTextStyle:{
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:12,//字体大小
        },
    
        nameRotate:0,//坐标轴名字旋转，角度值
        min:null,//坐标轴刻度最小值
        max:null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel:{
            show:true,
            rotate:0,//水平:0 斜角:45 垂直:90
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:8,//字体大小
        },
        //////////////////轴线相关配置////////////////////////
        axisLine:{
            show:true,
            lineStyle:{
                color:'#333'
            }
        },
        splitLine: {
            show:true,
            lineStyle: {
                type: 'dashed'
            }
        }
    
    },
    yAxis:{
        show : true,//是否显示 y轴
        //   position :  ,
        offset :0,//y 轴的位置
        type : 'value',//坐标轴类型
        name :null,//y 轴名称
        boundaryGap:true,
        //nameGap:null,//坐标轴名称与轴线之间的距离
        nameTextStyle:{
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:12,//字体大小
        },
    
        nameRotate:0,//坐标轴名字旋转，角度值
        min:null,//坐标轴刻度最小值
        max:null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel:{
            show:true,
            rotate:0,//水平:0 斜角:45 垂直:90
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:8,//字体大小
        },
         //////////////////轴线相关配置////////////////////////
        axisLine:{
            show:true,
            lineStyle:{
                color:'#333'
            }
        },
        splitLine: {
            show:true,
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '1990',
        data: [
            [28604,77,17096869],[31163,77.4,27662440],
            [1516,68,1154605773],[13670,74.7,10582082],
            [28599,75,4986705],[29476,77.1,56943299],
            [31476,75.4,78958237],[28666,78.1,254830],
            [1777,57.7,870601776],[29550,79.1,122249285],
            [2076,67.9,20194354],[12087,72,42972254],
            [24021,75.4,3397534],[43296,76.8,4240375],
            [10088,70.8,38195258],[19349,69.6,147568552],
            [10670,67.3,53994605],[26424,75.7,57110117],
            [37062,75.4,252847810]
        ],
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
    }, {
        name: '2015',
        data: [
                [44056,81.8,23968973],[43294,81.7,35939927],
                [13334,76.9,1376048943],[21291,78.5,11389562],
                [38923,80.8,5503457],[37599,81.9,64395345],
                [44053,81.1,80688545],[42182,82.8,329425],
                [5903,66.8,1311050527],[36162,83.5,126573481],
                [1390,71.4,25155317],[34644,80.7,50293439],
                [34186,80.6,4528526],[64304,81.6,5210967],
                [24787,77.3,38611794],[23038,73.13,143456918],
                [19360,76.5,78665830],[38225,81.4,64715810],
                [53354,79.1,321773631]
        ],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 10e2;
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            shadowOffsetX: 0,
            color: 'rgb(129, 227, 238)'
        }
    }]
}

const BasicScatterChart = {
    textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 12,
    },
    title:{
        show:false,
        text:'1990 与 2015 年各国家人均寿命与 GDP',
        textStyle:{
            color:'#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 18,
        },
        subtext:'',
        subtextStyle:{
            color:'#aaa',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left:'left',
    },
    legend:{
        show:true,
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
        left: 'auto',//'left' 'center' 'right'
        top: 'auto',//'top', 'middle', 'bottom'
    },
    xAxis:{
        show : true,//是否显示 x轴
        //   position :  ,
        offset :0,//x 轴的位置
        type : 'value',//坐标轴类型
        name :null,//x 轴名称
        //nameGap:null,//坐标轴名称与轴线之间的距离
        boundaryGap:true,
        nameTextStyle:{
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:12,//字体大小
        },
    
        nameRotate:0,//坐标轴名字旋转，角度值
        min:null,//坐标轴刻度最小值
        max:null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel:{
            show:true,
            rotate:0,//水平:0 斜角:45 垂直:90
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:8,//字体大小
        },
        //////////////////轴线相关配置////////////////////////
        axisLine:{
            show:true,
            lineStyle:{
                color:'#333'
            }
        },
        splitLine: {
            show:true,
            lineStyle: {
                type: 'dashed'
            }
        }
    
    },
    yAxis:{
        show : true,//是否显示 y轴
        //   position :  ,
        offset :0,//y 轴的位置
        type : 'value',//坐标轴类型
        name :null,//y 轴名称
        boundaryGap:true,
        //nameGap:null,//坐标轴名称与轴线之间的距离
        nameTextStyle:{
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:12,//字体大小
        },
    
        nameRotate:0,//坐标轴名字旋转，角度值
        min:null,//坐标轴刻度最小值
        max:null,//坐标轴刻度最大值
        /////////////////轴标签相关配置///////////////////////
        axisLabel:{
            show:true,
            rotate:0,//水平:0 斜角:45 垂直:90
            color:'#fff',//y 轴名称文字字体的风格
            fontStyle:'normal',//坐标轴名称文字字体的风格
            fontWeight:'normal',//坐标轴名称文字字体的粗细
            fontFamily:'sans-serif',//坐标轴名称文字的字体系列
            fontSize:8,//字体大小
        },
         //////////////////轴线相关配置////////////////////////
        axisLine:{
            show:true,
            lineStyle:{
                color:'#333'
            }
        },
        splitLine: {
            show:true,
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    series: [{
        name: '系列一',
        data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
        ],
        type: 'scatter',
        symbolSize: 12,

        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            shadowOffsetX: 0,
            color: 'rgb(251, 118, 123)'
        }
    }]
}

const BasicChinaMap2DChart = {
    textStyle: {
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        fontSize: 8,
    },
    backgroundColor: '#404a59',

    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#01AAED',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        },
        center:[115.97, 29.71]
    },
  
    series:  [
       
    ]
}

// module.exports = defaultBarChartOption;
const defaultChartOptions = {
    BasicBarChart: BasicBarChart,
    BasicLineChart: BasicLineChart,
    BasicPieChart: BasicPieChart,
    BasicAreaChart: BasicAreaChart,
    BasicNagtiveBarChart: BasicNagtiveBarChart,
    BasicBubbleChart: BasicBubbleChart,
    BasicScatterChart: BasicScatterChart,
    BasicChinaMap2DChart: BasicChinaMap2DChart
}

export default defaultChartOptions;