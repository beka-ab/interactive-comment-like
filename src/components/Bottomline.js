import { useState } from "react";
const Bottomline = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="bottom-content">
      <div className="bottom-left">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="increament btn"
        >
          {props.increase}
        </button>
        <span className="count">{count}</span>
        <button
          onClick={() => {
            count !== 0 && setCount(count - 1);
          }}
          className="decreament btn"
        >
          {props.decrease}
        </button>
      </div>
      <div className="bottom-right">
        {props.reply}

        <span
          onClick={() => {
            props.handlereply(props.userId);
          }}
          className="reply"
        >
          Reply
        </span>
      </div>
    </div>
  );
};

export default Bottomline;
