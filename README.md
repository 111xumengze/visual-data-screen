# visual-data-screen
![imgReactScreen](https://github.com/111xumengze/comprehensive-screen/blob/master/QQ%E6%88%AA%E5%9B%BE20190925171549.png)
## Installation
 ```
 create-react-app projectname
 npm install react-draggable
 npm install react-resizable
 npm install echarts
 npm install echarts-for-react
 npm install antd
 npm install lodash
 ```
## 1.布局
#### HeaderNavi
负责添加图表
#### ContentLayout
由ReactScreenLayout和放缩屏幕的Affix组成，负责显示、删除、拖动和放缩图表
#### RSiderNavi
显示和配置当前操作的图表option
## 2.Redux数据流动
#### （1）状态包括layout、payload、echarts信息：  
+ layout保存图表组件的几何信息（位置和大小），数据类型为List，item形式为{key, x, y, w, h}（以后待改进）
+ echarts保存图表组件的option信息，数据类型为Map，形式为 { key, option }。
+ payload表示为当前操作的图表信息，形式为 {key, option}。如果当前无操作的图表,key=null, option为空的Map
#### （2）action形式为 {type, payload: {key, option}}。  
#### （3）HeaderNavi发起createEcharts action，创建新的echart，并将当前的payload置为该echart。  
#### （4）ContentLayout发起removeEcharts action，删除当前操作的echart，并将当前的payload变为{ key: null, option: Map()}，默认为全局配置。  
#### （5）RSiderNavi发起updateEcharts action，修改当前操作的echart的数据，并更新payload。  
## 3.ReactScreenLayout
+ 由两种ReactScreenItem组成：placeholder和图表组件。
+ placeholder为待放置的位置，图表组件因为设置了transition，总是显示为placeholder先放置，然后图表组件过渡到那个placeholder的位置。
+ ReactScreenLayout会遍历每个图表，根据他们在layout中对应的几何信息，计算出样式，然后应用之。
### Drag
+ Drag监听.react-resizble-handle，如果发生resizable事件，则不触发drag
+ 将Drag分为三个阶段onDragStart,onDrag和onDragStop，通过dragging记录这三个阶段的位置信息， 这些位置信息始终相对于ReactScreenLayout（因为预览和最终的部分都是这个ReactScreenLayout）。每次子节点发生Drag，都会将几何信息反馈给ReactScreenLayout的layout，并记录activeDrag用于palceholder放置。
#### onDragStart:
```
const { offsetParent } = node;
if (!offsetParent) return;
const parentRect = offsetParent.getBoundingClientRect();
const clientRect = node.getBoundingClientRect();

const cLeft = clientRect.left / this.props.transformScale;
const pLeft = parentRect.left / this.props.transformScale;
const cTop = clientRect.top / this.props.transformScale;
const pTop = parentRect.top / this.props.transformScale;
// 位置始终相对于大屏
newPosition.left = cLeft - pLeft + offsetParent.scrollLeft;
newPosition.top = cTop - pTop + offsetParent.scrollTop;
 ```
#### onDrag:
如果不做屏幕限制的话，
```
newPosition.left = this.state.dragging.left + deltaX;
newPosition.top = this.state.dragging.top + deltaY;
```
否则，
```
if (containerWidth - (this.state.dragging.left + deltaX + this.state.width) >= 0) {
  newPosition.left = Math.max(0, this.state.dragging.left + deltaX);
} else {
  newPosition.left = containerWidth - (this.state.dragging.left + deltaX);
}

if (containerHeight - (this.state.dragging.top + deltaY + this.state.height) >= 0) {
  newPosition.top = Math.max(0, this.state.dragging.top + deltaY);
} else {
  newPosition.top = containerHeight - (this.state.dragging.top + deltaY);
}
 ```
其中,deltaX表示为mouseDown和mouseUp的clientX差值, deltaY表示为mouseDown和mouseUp的clientY差值。
#### onDragStop:
 ```
 newPosition.left = this.state.dragging.left;
 newPosition.top = this.state.dragging.top;
```
### Resize
将Resize分为三个阶段onResizeStart,onResize和onResizeStop，通过onResizeHandler处理

如果不做屏幕限制的话，
 ```
 let { height, width } = size;
 ```
否则，
 ```
 if(x + width - containerWidth >= 0){
     width = containerWidth - x;
 }

 if(y + height - containerHeight >= 0){
   height = containerHeight - y;
 }
 ```
其中, width 表示为mouseDown和mouseUp的clientX差值, height表示为mouseDown和mouseUp的clientY差值。
