import React, { useState } from "react";

function Item(props) {
  var [itemState, setItemState] = useState(null);

  if (!props.item.crossed && itemState !== null) {
    setItemState(null);
  }

  function handleClick() {
    if (!props.item.crossed) {
      setItemState({ textDecoration: "line-through" });
      props.cross(props.item.key);
    } else {
      setItemState(null);
      props.uncross(props.item.key);
    }
  }

  return (
    <li style={itemState} onClick={handleClick}>
      {props.item.value}
    </li>
  );
}

export default Item;
