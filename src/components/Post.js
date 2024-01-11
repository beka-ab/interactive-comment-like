import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
  const [count, setCount] = useState(0);
  const reply = <FontAwesomeIcon icon={faReply} />;
  return (
    <div className="container">
      <div className="head-content">
        <img src={props.img} alt={props.alt} />
        <span>{props.name}</span>
        <span>{props.potstime}</span>
      </div>
      <div className="post-content">{props.postcontent}</div>
      <div className="bottom-content">
        <div className="bottom-left">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="increament btn"
          >
            {" "}
            {props.increament}
          </button>
          <span className="count">{count}</span>
          <button
            onClick={() => {
              count !== 0 && setCount(count - 1);
            }}
            className="decreament btn"
          >
            <img src="../img/dcr.png" alt="decreament" />
          </button>
          <img src="../img/dcr.png" alt="decreament" />
        </div>
        <div className="bottom-right">
          {reply}

          <span>Reply</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
