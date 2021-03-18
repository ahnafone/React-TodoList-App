import React from "react";
import Item from "./Item";

function List(props) {
  function handleCross(key) {
    props.cross(key);
  }
  function handleUncross(key) {
    props.uncross(key);
  }

  return (
    <div>
      <ul>
        {props.items.map(elem => {
          return (
            <Item item={elem} cross={handleCross} uncross={handleUncross} />
          );
        })}
      </ul>
    </div>
  );
}

export default List;
