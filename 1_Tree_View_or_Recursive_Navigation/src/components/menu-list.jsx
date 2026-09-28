import React from "react";
import MenuItem from "./menu_item";

export default function MenuList({ list = [] }) {
  return (
    // ------------------------------------------------------
    // <div className="menu-list-container">
    //   {list && list.length
    //     ? list.map((listItem) => {
    //         return <MenuItem item={listItem} />;
    //       })
    //     : null}
    // </div>
    // ---------------------------------------------------------

    <ul>
      {list && list.length
        ? list.map((listItem) => {
            return <MenuItem item={listItem} />;
          })
        : null}
    </ul>
  );
}
