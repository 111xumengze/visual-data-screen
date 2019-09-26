
import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';


export default class BasicBarChart extends PureComponent {  
 constructor(props){
     super(props);
     //const id=(this.props.id+'').split('_');
     this.state={
       // id:this.props.id,
       // projectID:this.props.projectID,
       
        isLoaded:true,
        echarts_react:null,
        option:{
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
                        name: '销量',
                        type: 'bar',
                        barWidth:'60%',
                        itemStyle:{
                            color:'#01AAED' ,
                            borderType:'solid',
                            borderWidth:0,
                            borderColor:'#000',
                            barBorderRadius:0,
                        },
                        data: [["系列一",5],["系列二",20],["系列三",36],["系列四",10],["系列五",10],["系列六",20]]
                }
                ]
            } 
     }
    
 }

 componentDidMount() {
   
    let echarts_instance = this.echarts_react.getEchartsInstance();
    echarts_instance.getZr().on('click',params=>{
        const pointInPixel= [params.offsetX, params.offsetY];
        if (echarts_instance.containPixel('grid',pointInPixel)) {
            //let xIndex=echarts_instance.convertFromPixel({seriesIndex:0},[params.offsetX, params.offsetY])[0];
            //事件处理代码书写位置
            
            //let option=echarts_instance.getOption();
            // this.props.callOption(this.props.id,this.state.option); 
            //this.props.callOption(JSON.stringify(this.state.option)); 
        }
    });
     
  }

  
 


  render() {
    return (
          <ReactEcharts
            ref={(e) => { this.echarts_react = e; }}
            option={this.state.option}
            style={this.props.style}
            className='react_for_echarts' 
          /> 
    );
  }
}
