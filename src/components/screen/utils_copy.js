import React from 'react';
import _ from "lodash";

// export type CompactType = ?("horizontal" | "vertical");
const isProduction = process.env.NODE_ENV === "production";
const DEBUG = false;

/**
 * Move an element. Responsible for doing cascading movements of other elements.
 *
 * @param  {Array}      layout            Full layout to modify.
 * @param  {LayoutItem} l                 element to move.
 * @param  {Number}     [x]               X position in grid units.
 * @param  {Number}     [y]               Y position in grid units.
 */
export function moveElement(
  layout,
  l,
  x,
  y,
  isUserAction,
  preventCollision,
  compactType,
  cols
) {
  if (l.static) return layout;

  // Short-circuit if nothing to do.
  if (l.y === y && l.x === x) return layout;

  log(`Moving element ${l.i} to [${String(x)},${String(y)}] from [${l.x},${l.y}]`);
  const oldX = l.x;
  const oldY = l.y;

  // This is quite a bit faster than extending the object
  if (typeof x === "number") l.x = x;
  if (typeof y === "number") l.y = y;
  l.moved = true;

  // // If this collides with anything, move it.
  // // When doing this comparison, we have to sort the items we compare with
  // // to ensure, in the case of multiple collisions, that we're getting the
  // // nearest collision.
  // let sorted = sortLayoutItems(layout, compactType);
  // const movingUp =
  //   compactType === "vertical" && typeof y === "number" ? oldY >= y
  //   : compactType === "horizontal" && typeof x === "number" ? oldX >= x
  //   : false;
  // if (movingUp) sorted = sorted.reverse();
  // const collisions = getAllCollisions(sorted, l);


  // // Move each item that collides away from this element.
  // for (let i = 0, len = collisions.length; i < len; i++) {
  //   const collision = collisions[i];
  //   log(
  //     `Resolving collision between ${l.i} at [${l.x},${l.y}] and ${
  //       collision.i
  //     } at [${collision.x},${collision.y}]`
  //   );

  //   // Short circuit so we can't infinite loop
  //   if (collision.moved) continue;

    
  //   layout = moveElementAwayFromCollision(
  //     layout,
  //     l,
  //     collision,
  //     isUserAction,
  //     compactType,
  //     cols
  //   );
    
  // }

  return layout;
}

// export function getAllCollisions(
//   layout,
//   layoutItem
// ){
//   return true;
//   // return layout.filter(l => collides(l, layoutItem));
// }

// /**
//  * Given two layoutitems, check if they collide.
//  */
// export function collides(l1, l2) {
//   if (l1.i === l2.i) return false; // same element
//   if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2
//   if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2
//   if (l1.y + l1.h <= l2.y) return false; // l1 is above l2
//   if (l1.y >= l2.y + l2.h) return false; // l1 is below l2
//   return true; // boxes overlap
// }


// /**
//  * This is where the magic needs to happen - given a collision, move an element away from the collision.
//  * We attempt to move it up if there's room, otherwise it goes below.
//  *
//  * @param  {Array} layout            Full layout to modify.
//  * @param  {LayoutItem} collidesWith Layout item we're colliding with.
//  * @param  {LayoutItem} itemToMove   Layout item we're moving.
//  */
// export function moveElementAwayFromCollision(
//   layout,
//   collidesWith,
//   itemToMove,
//   isUserAction=true,
//   compactType,
//   cols
// ) {
//   const compactH = compactType === "horizontal";
//   // Compact vertically if not set to horizontal
//   const compactV = compactType !== "horizontal";
//   const preventCollision = false; // we're already colliding

//   // If there is enough space above the collision to put this element, move it there.
//   // We only do this on the main collision as this can get funky in cascades and cause
//   // unwanted swapping behavior.

//   if (isUserAction) {
//     // Reset isUserAction flag because we're not in the main collision anymore.
//     isUserAction = false;

//     // Make a mock item so we don't modify the item here, only modify in moveElement.
//     const fakeItem = {
//       x: compactH ? Math.max(collidesWith.x - itemToMove.w, 0) : itemToMove.x,
//       y: compactV ? Math.max(collidesWith.y - itemToMove.h, 0) : itemToMove.y,
//       w: itemToMove.w,
//       h: itemToMove.h,
//       i: "-1"
//     };

//     // No collision? If so, we can go up there; otherwise, we'll end up moving down as normal
//     log(
//       `Doing reverse collision on ${itemToMove.i} up to [${fakeItem.x},${
//         fakeItem.y
//       }].`
//     );
//     return moveElement(
//       layout,
//       itemToMove,
//       compactH ? fakeItem.x : undefined,
//       compactV ? fakeItem.y : undefined,
//       isUserAction,
//       preventCollision,
//       compactType,
//       cols
//     );
//   }
//     // if (!getFirstCollision(layout, fakeItem)) {
//     //   log(
//     //     `Doing reverse collision on ${itemToMove.i} up to [${fakeItem.x},${
//     //       fakeItem.y
//     //     }].`
//     //   );
//     //   return moveElement(
//     //     layout,
//     //     itemToMove,
//     //     compactH ? fakeItem.x : undefined,
//     //     compactV ? fakeItem.y : undefined,
//     //     isUserAction,
//     //     preventCollision,
//     //     compactType,
//     //     cols
//     //   );
//     // }
//   // }

//   // return moveElement(
//   //   layout,
//   //   itemToMove,
//   //   compactH ? itemToMove.x + 1 : undefined,
//   //   compactV ? itemToMove.y + 1 : undefined,
//   //   isUserAction,
//   //   preventCollision,
//   //   compactType,
//   //   cols
//   // );
// }


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


// /**
//  * Get all static elements.
//  * @param  {Array} layout Array of layout objects.
//  * @return {Array}        Array of static layout items..
//  */
// export function getStatics(layout){
//   return layout.filter(l => l.static);
// }


// /**
//  * Given a layout, compact it. This involves going down each y coordinate and removing gaps
//  * between items.
//  *
//  * @param  {Array} layout Layout.
//  * @param  {Boolean} verticalCompact Whether or not to compact the layout
//  *   vertically.
//  * @return {Array}       Compacted Layout.
//  */
// export function compact(
//   layout,
//   compactType,
//   cols
// ){
//   // Statics go in the compareWith array right away so items flow around them.
//   const compareWith = getStatics(layout);
//   // We go through the items by row and column.
//   const sorted = sortLayoutItems(layout, compactType);
//   // Holding for new items.
//   const out = Array(layout.length);

//   for (let i = 0, len = sorted.length; i < len; i++) {
//     let l = cloneLayoutItem(sorted[i]);

//     // // Don't move static elements
//     // if (!l.static) {
//     //   l = compactItem(compareWith, l, compactType, cols, sorted);

//     //   // Add to comparison array. We only collide with items before this one.
//     //   // Statics are already in this array.
//     //   compareWith.push(l);
//     // }
//     compareWith.push(l);

//     // Add to output array to make sure they still come out in the right order.
//     out[layout.indexOf(sorted[i])] = l;

//     // Clear moved flag, if it exists.
//     l.moved = false;
//   }

//   return out;
// }

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

// // Flow can't really figure this out, so we just use Object
// export function autoBindHandlers(el, fns){
//   console.log(fns);
//   fns.forEach(key => (el[key] = el[key].bind(el)));
// }

// export function setTransform({ top, left, width, height }) {
//   // Replace unitless items with px
//   // const translate = `translate(${left}px,${top}px)`;
//   const translate = `translate(${left}px,${top}px)`;
//   return {
//     transform: translate,
//     WebkitTransform: translate,
//     MozTransform: translate,
//     msTransform: translate,
//     OTransform: translate,
//     width: `${width}px`,
//     height: `${height}px`,
//     position: "absolute"
//   };
// }


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