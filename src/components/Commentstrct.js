import "./commentstrct.scss";
const Commentstrct = (props) => {
  return (
    <>
      <div className="head-content">
        <img src={props.img} alt={props.alt} />
        <span className="user-name">{props.name}</span>
        <span className="post-time"> {props.potstime}</span>
      </div>
      <div className="post-content">{props.postcontent}</div>
    </>
  );
};

export default Commentstrct;
