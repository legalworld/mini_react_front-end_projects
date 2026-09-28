# Tree View / Recursive Navigation Menu - Revision Guide

## 1. Project Goal

Build a nested menu/tree view where each item can have children, and those children can again have children. The goal is to render a recursive navigation structure without writing separate JSX for each level.

## 2. Understand the Data Shape

Open the menu data file and study the structure:

- Each item has a `label`
- Each item has a `to` URL/path
- Some items have a `children` array
- A parent item may contain nested children, which may themselves contain nested children

Example:

```js
const menus = [
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/details",
        children: [
          {
            label: "Location",
            to: "/location",
          },
        ],
      },
    ],
  },
];
```

Important idea: the data is nested, so the UI must also be nested.

## 3. Start from the Root Component

The top-level component is responsible for passing the full menu array into the tree renderer.

```jsx
import menus from "./data/data.js";

function App() {
  return <Index menus={menus} />;
}
```

Revision point:

- `App` should not manually render all items
- It should just pass the data to the recursive component tree

## 4. Create the Tree Container

The `Index` component is the root of the tree UI.

```jsx
export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
```

Focus on:

- receiving the `menus` prop
- passing the list to the list renderer

## 5. Render the List of Items

The `MenuList` component loops through each item and renders a single item component.

```jsx
export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((item) => (
            <MenuItem key={item.to || item.label} item={item} />
          ))
        : null}
    </ul>
  );
}
```

Revision point:

- use `.map()` to iterate through the array
- give each item a unique `key`
- do not render if the list is empty

## 6. Render One Menu Item

This is the most important part. Each menu item should display its label, and if it has children, then render another list recursively.

```jsx
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  if (!item) return null;

  return (
    <li>
      <p>{item.label}</p>
      {item.children && item.children.length > 0 ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
```

Key concept:

- A menu item renders itself
- If it has children, it calls the same `MenuList` on its child array
- This is recursion

## 7. Why Recursion Works Here

The structure is self-similar:

- a parent menu item
- contains a list of child menu items
- each child item is the same shape as its parent

This is why a recursive render works perfectly for nested navigation.

## 8. Common Mistakes to Watch For

1. Using `item.render` instead of `item.label`
2. Forgetting to check `children`
3. Not returning `null` for empty data
4. Missing `key` on mapped list items
5. Rendering only one level of the menu

## 9. How to Revise Efficiently

Follow this order:

1. Read the data structure in `src/data/data.js`
2. Trace how `App.jsx` passes the data down
3. Understand `Index.jsx` as the root tree wrapper
4. Study `menu-list.jsx` as the repeated list renderer
5. Understand `menu_item.jsx` as the recursive logic
6. Visualize how one item spawns its children list

## 10. Practice Questions

- What is the difference between a normal list and a recursive tree?
- Why is the `children` check necessary?
- What happens if a menu item has no `children`?
- How does recursion avoid writing separate components for each depth?
- What would happen if you forgot to use a unique key?

## 11. Quick Summary

This project teaches:

- nested data structures
- recursive rendering
- component composition
- prop passing in React
- list rendering with conditional child display

## 12. Final Revision Tip

When revising, always ask:

“Am I looking at a single item or a list of items?”

If it is a single item, render its label and its children.
If it is a list, map over the array and render each item.

That mental model is the core of this project.
