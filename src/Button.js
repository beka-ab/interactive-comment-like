import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={() => props.setCount(props.count + 1)}>
        count is {props.count}
      </button>
    </>
  );
};

export default Button;
