import React from 'react';
import classNames from "classnames";
import { DraggableCore } from "react-draggable";
import { Resizable } from "react-resizable";
// import renderEmpty from 'antd/lib/config-provider/renderEmpty';

export default class ReactScreenItem extends React.Component {


  static defaultProps = {
    className: "",
    cancel: "",
    handle: "",
    minH: 1,
    minW: 1,
    maxH: Infinity,
    maxW: Infinity,
    transformScale: 1
  };

  state = {
    isResize: false,
    resizing: null,
    dragging: null, // 用于记录onDragStart, onDrag, onDragStop三种状态的位置信息
    className: "",
    activeDrags: 0,
    width: 200,
    height: 200,
    left: 0,
    top: 0,
  };


  setTransform({ top, left, width, height }) {
    // Replace unitless items with px
    // const translate = `translate(${left}px,${top}px)`;
    const translate = `translate(${left}px,${top}px)`;
    return {
      transform: translate,
      WebkitTransform: translate,
      MozTransform: translate,
      msTransform: translate,
      OTransform: translate,
      width: `${width}px`,
      height: `${height}px`,
      position: "absolute"
    };
  }

  setTopLeft({ top, left, width, height }) {
    return {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
      position: "absolute"
    };
  }

  perc(num) {
    return num * 100 + "%";
  }

  /**
   * Given a height and width in pixel values, calculate grid units.
   * @param  {Number} height Height in pixels.
   * @param  {Number} width  Width in pixels.
   * @return {Object} w, h as grid units.
   */
  calcWH({
    height,
    width
  }) {
    const { margin, maxRows, cols, rowHeight, x, y } = this.props;
    const colWidth = this.calcColWidth();

    // width = colWidth * w - (margin * (w - 1))
    // ...
    // w = (width + margin) / (colWidth + margin)
    let w = Math.round((width + margin[0]) / (colWidth + margin[0]));
    let h = Math.round((height + margin[1]) / (rowHeight + margin[1]));

    return { w, h };
  }

  /**
  * This is where we set the grid item's absolute placement. It gets a little tricky because we want to do it
  * well when server rendering, and the only way to do that properly is to use percentage width/left because
  * we don't know exactly what the browser viewport is.
  * Unfortunately, CSS Transforms, which are great for performance, break in this instance because a percentage
  * left is relative to the item itself, not its container! So we cannot use them on the server rendering pass.
  *
  * @param  {Object} pos Position object with width, height, left, top.
  * @return {Object}     Style object.
  */
  createStyle(pos) {
    const { usePercentages, containerWidth, useCSSTransforms } = this.props;
    // console.log(pos);
    let style;
    // CSS Transforms support (default)
    if (useCSSTransforms) {//useCSSTransforms
      style = this.setTransform(pos);
    } else {
      // top,left (slow)
      style = this.setTopLeft(pos);

      // This is used for server rendering.
      if (usePercentages) {
        style.left = this.perc(pos.left / containerWidth);
        style.width = this.perc(pos.width / containerWidth);
      }
    }

    return style;
  }

  /**
   * onDragStart event handler
   * @param  {Event}  e             event data
   * @param  {Object} callbackData  an object with node, delta and position information
   */
  onDragStart = (e, { node }) => {
    // console.log('on drag');
    // if(this.state.isResize) return;
    if (!this.props.onDragStart) return;

    const newPosition = { top: 0, left: 0 };


    // // TODO: this wont work on nested parents
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
    this.setState({ dragging: newPosition });


    return (
      this.props.onDragStart &&
      this.props.onDragStart.call(this, this.props.i, newPosition.left, newPosition.top, {
        e,
        node,
        newPosition
      })
    );
  };

  /**
   * onDrag event handler
   * @param  {Event}  e             event data
   * @param  {Object} callbackData  an object with node, delta and position information
   */
  onDrag = (e, { node, deltaX, deltaY }) => {
    // if(this.state.isResize) return;
    if (!this.props.onDrag) return;

    const newPosition = { top: 0, left: 0 };
    const { containerHeight, containerWidth } = this.props;
    if (!this.state.dragging)
      throw new Error("onDrag called before onDragStart.");

    if (this.props.bundParentConstraint) {
      // 这里出现一个问题：
      // 尽管会出现containerWidth >= this.state.dragging.left + deltaX + this.state.width
      // 但是打印的结果还是false
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
    } else {
      newPosition.left = this.state.dragging.left + deltaX;
      newPosition.top = this.state.dragging.top + deltaY;
    }


    this.setState({ dragging: newPosition });

    return (
      this.props.onDrag &&
      this.props.onDrag.call(this, this.props.i, newPosition.left, newPosition.top, {
        e,
        node,
        newPosition
      })
    );
  };

  /**
  * onDragStop event handler
  * @param  {Event}  e             event data
  * @param  {Object} callbackData  an object with node, delta and position information
  */
  onDragStop = (e, { node }) => {
    // if(this.state.isResize) return;

    if (!this.props.onDragStop) return;

    const newPosition = { top: 0, left: 0 };

    if (!this.state.dragging)
      throw new Error("onDragEnd called before onDragStart.");
    newPosition.left = this.state.dragging.left;
    newPosition.top = this.state.dragging.top;
    this.setState({ dragging: null });

    // const { x, y } = this.calcXY(newPosition.top, newPosition.left);
    return (
      this.props.onDragStop &&
      this.props.onDragStop.call(this, this.props.i, newPosition.left, newPosition.top, {
        e,
        node,
        newPosition
      })
    );
  };

  // onDragStart = () => {
  //   console.log('onDragStart');
  //   this.setState({ activeDrags: this.state.activeDrags + 1 });
  // };

  // onDragStop = () => {
  //   this.setState({ activeDrags: this.state.activeDrags - 1 });
  // };

  mixinDraggable(child) {

    return (
      <DraggableCore
        onStart={this.onDragStart}
        onDrag={this.onDrag}
        onStop={this.onDragStop}
        handle={this.props.handle}
        cancel={
          ".react-resizable-handle" +
          (this.props.cancel ? "," + this.props.cancel : "")
        }

      >
        {child}
      </DraggableCore>
    );
  }


  /**
   * onResizeStop event handler
   * @param  {Event}  e             event data
   * @param  {Object} callbackData  an object with node and size information
   */
  onResizeStop = (
    e,
    callbackData//: { node: HTMLElement, size }
  ) => {
    this.onResizeHandler(e, callbackData, "onResizeStop");
  };

  /**
   * onResizeStart event handler
   * @param  {Event}  e             event data
   * @param  {Object} callbackData  an object with node and size information
   */
  onResizeStart = (
    e,
    callbackData//: { node: HTMLElement, size }
  ) => {
    this.onResizeHandler(e, callbackData, "onResizeStart");
  };


  /**
  * onResize event handler
  * @param  {Event}  e             event data
  * @param  {Object} callbackData  an object with node and size information
  */
  onResize = (
    e,
    callbackData//: { node: HTMLElement, size }
  ) => {
    this.onResizeHandler(e, callbackData, "onResize");
  };

  /**
   * Wrapper around drag events to provide more useful data.
   * All drag events call the function with the given handler name,
   * with the signature (index, x, y).
   *
   * @param  {String} handlerName Handler name to wrap.
   * @return {Function}           Handler function.
   */
  onResizeHandler(
    e,
    { node, size },
    handlerName
  ) {

    // this.setState({ isResize: true });
    const handler = this.props[handlerName];
    if (!handler) return;
    const { i, x, y, containerWidth, containerHeight } = this.props;

    // Get new XY
    // let { w, h } = this.calcWH(size);\

    let { height, width } = size;

    if (this.props.bundParentConstraint) {
      if (x + width - containerWidth >= 0) {
        width = containerWidth - x;
      }

      if (y + height - containerHeight >= 0) {
        height = containerHeight - y;
      }
    }


    this.setState({ 
      resizing: handlerName === "onResizeStop" ? null : size,
      // isResize: handlerName === "onResizeStop" ? false : true,
     });

    handler.call(this, i, width, height, { e, node, size });
  }
  /**
  * Mix a Resizable instance into a child.
  * @param  {Element} child    Child element.
  * @param  {Object} position  Position object (pixel values)
  * @return {Element}          Child wrapped in Resizable.
  */
  mixinResizable(
    child,
    position
  ) {
    return (
      <Resizable
        height={position.height}
        width={position.width}
        onResizeStop={this.onResizeStop}
        onResizeStart={this.onResizeStart}
        onResize={this.onResize}
      // resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
      >
        {child}
      </Resizable>
    )
  }

  calcPosition(x, y, w, h, state) {
    // console.log(x, y, w, h);
    const out = {
      left: x,//Math.round((colWidth + margin[0]) * x + containerPadding[0]),
      top: y, //Math.round((rowHeight + margin[1]) * y + containerPadding[1]),
      // 0 * Infinity === NaN, which causes problems with resize constraints;
      // Fix this if it occurs.
      // Note we do it here rather than later because Math.round(Infinity) causes deopt
      width: w,

      height: h,
      // h === Infinity
      //   ? h
      //   : Math.round(rowHeight * h + Math.max(0, h - 1) * margin[1])
    };

    if (state && state.resizing) {
      out.width = Math.round(state.resizing.width);
      out.height = Math.round(state.resizing.height);
    }

    if (state && state.dragging) {
      out.top = Math.round(state.dragging.top);
      out.left = Math.round(state.dragging.left);
    }

    return out;
  }


  render() {
    // const {
    //     isDraggable,
    //     isResizable,
    // } = this.props;

    const {
      x,
      y,
      w,
      h,
      isDraggable,
      isResizable,
      useCSSTransforms
    } = this.props;

    // const {
    //     x,
    //     y,
    //     w,
    //     h,
    //     isDraggable,
    //     isResizable,
    //     droppingPosition,
    //     useCSSTransforms
    //   } = this.props;
    const pos = this.calcPosition(x, y, w, h, this.state);
    // const pos = this.calcPosition(x, y, w, h, this.state);
    // const pos - top, left, width, height
    // console.log(pos);
    const child = React.Children.only(this.props.children);
    let newChild = React.cloneElement(child, {
      className: classNames(
        "react-screen-item",
        child.props.className,
        this.props.className,
        {
          // static: this.props.static,
          // resizing: Boolean(this.state.resizing),
          // "react-draggable": isDraggable,
          // "react-draggable-dragging": Boolean(this.state.dragging),
          // dropping: Boolean(droppingPosition),
          cssTransforms: useCSSTransforms
        }
      ),
      // We can set the width and height on the child, but unfortunately we can't set the position.
      style: {
        ...this.props.style,
        ...child.props.style,
        // width: this.state.width + 'px',
        // height: this.state.height + 'px',
        ...this.createStyle(pos)
      }
    });
    // console.log(pos, this.createStyle(pos));
    if (isResizable) newChild = this.mixinResizable(newChild, pos);
    // if (isResizable) newChild = this.mixinResizable(newChild);
    // Draggable support. This is always on, except for with placeholders.
    if (isDraggable) newChild = this.mixinDraggable(newChild);

    return newChild;

  }
}