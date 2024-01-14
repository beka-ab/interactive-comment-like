import { useState } from "react";
import Commentstrct from "./Commentstrct";
import Bottomline from "./Bottomline";
import { Users } from "../data";

const Replyform = (props) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setDraftComment(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setComments([...comments, draftComment]);
    setDraftComment("");
  };
  const [comments, setComments] = useState([]);
  const [draftComment, setDraftComment] = useState("");

  return (
    <>
      {props.replyForm === props.itemnumber && (
        <div className="reply-container">
          <textarea
            onChange={handleChange}
            value={draftComment}
            name="post"
            className="reply-content"
            placeholder="type comment here..."
          ></textarea>
          <form>
            <button
              className="commentBtn"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              SEND
            </button>
          </form>
          <div className="reply-containter">
            {comments.map((comment, itemnumber) => (
              <div className="replyContent" key={itemnumber}>
                <Commentstrct
                  postcontent={`@${props.name} ${comment}`}
                  index={props.index}
                  img={Users[1].profilePicture}
                  name={Users[1].username}
                  potstime={"1 min ago"}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Replyform;
