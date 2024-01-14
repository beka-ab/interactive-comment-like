import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Replyform from "./Reply";
import { Users } from "../data";
import Commentstrct from "./Commentstrct";
import Bottomline from "./Bottomline";
const Post = (props) => {
  const [replyForm, setReplyform] = useState(null);

  const handlereply = (postNumber) => {
    setReplyform(postNumber);
  };

  const reply = <FontAwesomeIcon icon={faReply} />;
  const increase = <FontAwesomeIcon icon={faPlus} />;
  const decrease = <FontAwesomeIcon icon={faMinus} />;
  return (
    <>
      {Users.map((user) => (
        <div className="container" key={user.id}>
          <Commentstrct
            index={user.id}
            img={user.profilePicture}
            name={user.username}
            potstime={user.lastseen}
            postcontent={user.post}
          />
          <Bottomline
            increase={increase}
            decrease={decrease}
            handlereply={handlereply}
            reply={reply}
            userId={user.id}
          />
          <Replyform
            itemnumber={user.id}
            replyForm={replyForm}
            index={user.id}
            img={user.profilePicture}
            name={user.username}
            potstime={user.lastseen}
            postcontent={user.post}
            handlereply={handlereply}
          />
        </div>
      ))}
    </>
  );
};

export default Post;
