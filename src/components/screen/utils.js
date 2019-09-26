import React from 'react';
import _ from "lodash";

// export type CompactType = ?("horizontal" | "vertical");
const isProduction = process.env.NODE_ENV === "production";
const DEBUG = false;




export function sortLayoutItemsByRowCol(layout) {
  return [].concat(layout).sort(function(a, b) {
    if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
      return 1;
    } else if (a.y === b.y && a.x === b.x) {
      // Without this, we can get different sort results in IE vs. Chrome/FF
      return 0;
    }
    return -1;
  });
}

export function sortLayoutItemsByColRow(layout) {
  return [].concat(layout).sort(function(a, b) {
    if (a.x > b.x || (a.x === b.x && a.y > b.y)) {
      return 1;
    }
    return -1;
  });
}

/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array}        Layout, sorted static items first.
 */
export function sortLayoutItems(
  layout,
  compactType
) {
  if (compactType === "horizontal") return sortLayoutItemsByColRow(layout);
  else return sortLayoutItemsByRowCol(layout);
}





// Fast path to cloning, since this is monomorphic
export function cloneLayoutItem(layoutItem) {
    return {
      w: layoutItem.w,
      h: layoutItem.h,
      x: layoutItem.x,
      y: layoutItem.y,
      i: layoutItem.i,
      // minW: layoutItem.minW,
      // maxW: layoutItem.maxW,
      // minH: layoutItem.minH,
      // maxH: layoutItem.maxH,
      // moved: Boolean(layoutItem.moved),
      // static: Boolean(layoutItem.static),
      // These can be null
      isDraggable: layoutItem.isDraggable,
      isResizable: layoutItem.isResizable
    };
  }

/**
 * Get a layout item by ID. Used so we can override later on if necessary.
 *
 * @param  {Array}  layout Layout array.
 * @param  {String} id     ID
 * @return {LayoutItem}    Item at ID.
 */
export function getLayoutItem(layout, id) {
  for (let i = 0, len = layout.length; i < len; i++) {
    if (layout[i].i === id) return layout[i];
  }
}

/**
 * Return the bottom coordinate of the layout.
 *
 * @param  {Array} layout Layout array.
 * @return {Number}       Bottom coordinate.
 */
export function bottom(layout) {
  let max = 0,
    bottomY;
  for (let i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h;
    if (bottomY > max) max = bottomY;
  }
  return max;
}



/**
 * Generate a layout using the initialLayout and children as a template.
 * Missing entries will be added, extraneous ones will be truncated.
 *
 * @param  {Array}  initialLayout Layout passed in through props.
 * @param  {String} breakpoint    Current responsive breakpoint.
 * @param  {?String} compact      Compaction option.
 * @return {Array}                Working layout.
 */
export function synchronizeLayoutWithChildren(
  initialLayout,
  children,
  cols,
  compactType
) {
  initialLayout = initialLayout || [];

  // Generate one layout item per child.
  let layout = [];
  React.Children.forEach(children, (child, i) => {
    // Don't overwrite if it already exists.
    const exists = getLayoutItem(initialLayout, String(child.key));
    if (exists) {
      layout[i] = cloneLayoutItem(exists);
    } else {
      if (!isProduction && child.props._grid) {
        console.warn(
          "`_grid` properties on children have been deprecated as of React 15.2. " + // eslint-disable-line
            "Please use `data-grid` or add your properties directly to the `layout`."
        );
      }
      // const g = child.props["data-grid"] || child.props._grid;

      // // Hey, this item has a data-grid property, use it.
      // if (g) {
      //   if (!isProduction) {
      //     validateLayout([g], "ReactGridLayout.children");
      //   }
      //   layout[i] = cloneLayoutItem({ ...g, i: child.key });
      // } else 
      // {
        // Nothing provided: ensure this is added to the bottom
        layout[i] = cloneLayoutItem({
          w: 100,
          h: 100,
          x: 0,
          y: bottom(layout),
          i: String(child.key)
        });
      // }
    }
  });

  // Correct the layout.
  // layout = correctBounds(layout, { cols: cols });
  // layout = compact(layout, compactType, cols);
  return layout;
}




function log(...args) {
  if (!DEBUG) return;
  // eslint-disable-next-line no-console
  console.log(...args);
}


/**
 * Comparing React `children` is a bit difficult. This is a good way to compare them.
 * This will catch differences in keys, order, and length.
 */
export function childrenEqual(a, b) {
  return _.isEqual(
    React.Children.map(a, c => c.key),
    React.Children.map(b, c => c.key)
  );
}

export const noop = () => {};