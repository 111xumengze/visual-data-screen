import React from "react";
import _ from 'lodash';
// import { perc, setTopLeft, setTransform } from "./utils";
import classNames from "classnames";
import ReactScreenItem from './ReactScreenItem'
import {
  cloneLayoutItem,
  getLayoutItem,
  noop,
  synchronizeLayoutWithChildren,
  bottom,
  childrenEqual
  // childrenEqual,
  // cloneLayoutItem,
  // compact,
  // getLayoutItem,
  
  // synchronizeLayoutWithChildren,
  // validateLayout,
  // getAllCollisions,
  // noop
} from "./utils";


export default class ReactScreenLayout extends React.Component {


  static defaultProps = {
    className: "",
    style: {},
    draggableHandle: "",
    draggableCancel: "",
    layout: [],
    isDraggable: true,
    isResizable: true,
    isDroppable: false,
    useCSSTransforms: true,
    bundParentConstraint: true, //父容器限制
    transformScale: 1,
    // verticalCompact: true,
    compactType: "vertical",
    
    onLayoutChange: noop,
    onDragStart: noop,
    onDrag: noop,
    onDragStop: noop,
    onResizeStart: noop,
    onResize: noop,
    onResizeStop: noop,
    onDrop: noop
  };


  state = {

    activeDrag: null,
    layout: synchronizeLayoutWithChildren(
      this.props.layout,
      this.props.children,
    ),
    mounted: false,
    oldDragItem: null,
    oldLayout: null,
    oldResizeItem: null,
    children: []
  };



  componentDidMount() {
    this.setState({ mounted: true });
    // Possibly call back with layout on mount. This should be done after correcting the layout width
    // to ensure we don't rerender with the wrong width.
    this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
  }

  
  static getDerivedStateFromProps(nextProps, prevState) {
    let newLayoutBase;

    if (prevState.activeDrag) {
      return null;
    }

    // Legacy support for compactType
    // Allow parent to set layout directly.
    if (
      !_.isEqual(nextProps.layout, prevState.propsLayout) ||
      nextProps.compactType !== prevState.compactType
    ) {
      newLayoutBase = nextProps.layout;
    } else if (!childrenEqual(nextProps.children, prevState.children)) {
      // If children change, also regenerate the layout. Use our state
      // as the base in case because it may be more up to date than
      // what is in props.
      newLayoutBase = prevState.layout;
    }

    // We need to regenerate the layout.
    if (newLayoutBase) {
      const newLayout = synchronizeLayoutWithChildren(
        newLayoutBase,
        nextProps.children,
        nextProps.cols,
        // compactType(nextProps)
        nextProps.compactType,
      );

      return {
        layout: newLayout,
        // We need to save these props to state for using
        // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
        compactType: nextProps.compactType,
        children: nextProps.children,
        propsLayout: nextProps.layout
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.activeDrag) {
      const newLayout = this.state.layout;
      const oldLayout = prevState.layout;

      this.onLayoutMaybeChanged(newLayout, oldLayout);
    }
  }


  onLayoutMaybeChanged(newLayout, oldLayout) {
    if (!oldLayout) oldLayout = this.state.layout;

    if (!_.isEqual(oldLayout, newLayout)) {
      this.props.onLayoutChange(newLayout);
    }
  }


 /**
   * When dragging starts
   * @param {String} i Id of the child
   * @param {Number} x X position of the move
   * @param {Number} y Y position of the move
   * @param {Event} e The mousedown event
   * @param {Element} node The current dragging DOM element
   */
  onDragStart = (i, x, y, { e, node }) =>{
    const { layout } = this.state;
    // console.log(layout);
    var l = getLayoutItem(layout, i);

    if (!l) return;
    
    // console.log(this.state.layout);
    this.setState({
      oldDragItem: cloneLayoutItem(l),
      oldLayout: this.state.layout
    });
   
    return this.props.onDragStart(layout, l, l, null, e, node);
  }


  /**
   * Each drag movement create a new dragelement and move the element to the dragged location
   * @param {String} i Id of the child
   * @param {Number} x X position of the move
   * @param {Number} y Y position of the move
   * @param {Event} e The mousedown event
   * @param {Element} node The current dragging DOM element
   */
  onDrag = (i, x, y, { e, node }) =>{
    const { oldDragItem } = this.state;
    
    let { layout } = this.state;

    var l = getLayoutItem(layout, i);
    if (!l) return;

    // Create placeholder (display only)
    var placeholder = {
      w: l.w,
      h: l.h,
      x: l.x,
      y: l.y,
      placeholder: true,
      i: i
    };
  
    // Move the element to the dragged location.
    l.x = x;
    l.y = y;
    l.moved = true;

    this.props.onDrag(layout, oldDragItem, l, placeholder, e, node);
    this.setState({
      layout: [].concat(layout),//[].concat(layout),//compact(layout, this.props.compactType, cols),
      activeDrag: placeholder
    });
  }

  /**
   * When dragging stops, figure out which position the element is closest to and update its x and y.
   * @param  {String} i Index of the child.
   * @param {Number} x X position of the move
   * @param {Number} y Y position of the move
   * @param {Event} e The mousedown event
   * @param {Element} node The current dragging DOM element
   */
  onDragStop = (i, x, y, { e, node }) => {
    const { oldDragItem } = this.state;
    let { layout } = this.state;

    const l = getLayoutItem(layout, i);
    if (!l) return;

    l.x = x;
    l.y = y;
    l.moved = true;

    this.props.onDragStop(layout, oldDragItem, l, null, e, node);

    // Set state
    // const newLayout = compact(layout, this.props.compactType, cols);
    const newLayout = [].concat(layout);//compact(layout, this.props.compactType, cols);
    // const newLayout = compact(layout, compactType(this.props), cols);
    const { oldLayout } = this.state;
    this.setState({
      activeDrag: null,
      layout: newLayout,
      oldDragItem: null,
      oldLayout: null
    });

    this.onLayoutMaybeChanged(newLayout, oldLayout);
  }


  onResizeStart = (i, w, h, { e, node }) =>{
    const { layout } = this.state;
    var l = getLayoutItem(layout, i);
    if (!l) return;

    this.setState({
      oldResizeItem: cloneLayoutItem(l),
      oldLayout: this.state.layout
    });

    this.props.onResizeStart(layout, l, l, null, e, node);
  }

  onResize = (i, w, h, { e, node }) => {
    const { layout, oldResizeItem } = this.state;
    const l = getLayoutItem(layout, i);
    if (!l) return;

    // if(l.w + l.x >= containerWidth){
    //     l.w = containerWidth - l.x;
    // }else{
    //   l.w = w;
    // }

    // if(l.h + l.y >= containerHeight){
    //   l.h = containerHeight - l.y;
    // }else{
    //   l.h = h;
    // }

    l.w = w;
    l.h = h;

    // Create placeholder element (display only)
    var placeholder = {
      w: l.w,
      h: l.h,
      x: l.x,
      y: l.y,
      static: true,
      i: i
    };

    this.props.onResize(layout, oldResizeItem, l, placeholder, e, node);

    // Re-compact the layout and set the drag placeholder.
    this.setState({
      layout: layout,//compact(layout, this.props.compactType, cols),
      activeDrag: placeholder
    });
  }

  onResizeStop = (i, w, h, { e, node }) => {
    const { layout, oldResizeItem } = this.state;
    var l = getLayoutItem(layout, i);
  
    this.props.onResizeStop(layout, oldResizeItem, l, null, e, node);

    // Set state
    const newLayout = layout;// compact(layout, this.props.compactType, cols);
    // console.log(newLayout, layout);
    const { oldLayout } = this.state;
    this.setState({
      activeDrag: null,
      layout: newLayout,
      oldResizeItem: null,
      oldLayout: null
    });
    
    this.onLayoutMaybeChanged(newLayout, oldLayout);
  }


   /**
   * Given a grid item, set its style attributes & surround in a <Draggable>.
   * @param  {Element} child React element.
   * @return {Element}       Element wrapped in draggable and properly placed.
   */
  processGridItem(
    child,
  ){
    if (!child || !child.key) return;
    const l = getLayoutItem(this.state.layout, String(child.key));
    if (!l) return null;
    const {
      width,
      height,
      useCSSTransforms,
      bundParentConstraint,
      transformScale,
      draggableCancel,
      draggableHandle
    } = this.props;
    const { mounted } = this.state;
    

    return (
      <ReactScreenItem
        containerWidth={width}
        containerHeight={height}
        cancel={draggableCancel}
        handle={draggableHandle}
        onDragStop={this.onDragStop}
        onDragStart={this.onDragStart}
        onDrag={this.onDrag}
        onResizeStart={this.onResizeStart}
        onResize={this.onResize}
        onResizeStop={this.onResizeStop}
        isDraggable={true}
        isResizable={true}
        useCSSTransforms={useCSSTransforms && mounted}
        usePercentages={!mounted}
        bundParentConstraint={bundParentConstraint}
        transformScale={transformScale}
        w={l.w}
        h={l.h}
        x={l.x}
        y={l.y}
        i={l.i}
      >
        {child}
      </ReactScreenItem>
    );
  }

 

   /**
   * Create a placeholder object.
   * @return {Element} Placeholder div.
   */
  placeholder(){
    const { activeDrag } = this.state;
    if (!activeDrag) return null;
    const {
      width,
      height,
      useCSSTransforms,
      transformScale
    } = this.props;
    return (
      <ReactScreenItem
        w={activeDrag.w}
        h={activeDrag.h}
        x={activeDrag.x}
        y={activeDrag.y}
        i={activeDrag.i}
        className="react-screen-placeholder"
        containerWidth={width}
        containerHeight={height}
        isDraggable={false}
        isResizable={false}
        useCSSTransforms={useCSSTransforms}
        transformScale={transformScale}
      >
        <div />
      </ReactScreenItem>
    );
  }


  render() {

    const { className, style } = this.props;
    const mergedClassName = classNames("react-screen-layout", className);
    const mergedStyle = {
      // height: this.containerHeight(),
      ...style
    };

    return (
      <div
      className={mergedClassName}
      style={mergedStyle}

      >
        {/* 
          如果不使用React.Chidren 处理 this.props.chidren，this.props.chidren的值会有三种情况：
          1.当前组件没有子节点，值为undefined
          2.当前组件只有一个子节点，值为object
          3.当前组件有多个子节点，值为Array
        */}
        {React.Children.map(this.props.children, child =>
          this.processGridItem(child)
        )}

        {this.placeholder()}
      </div>
    );
  }
}