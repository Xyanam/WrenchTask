import React from "react";
import classes from "./Post.module.css";

const Post = ({ title, body, name, company, photo }) => {
  return (
    <div className={classes.block}>
      <div className={classes.blockHeader}>
        <div className={classes.imgBlock}>
          <img src={photo} alt="" />
        </div>
        <div className={classes.info}>
          <p>Author: {name}</p>
          <p>Company: {company}</p>
        </div>
      </div>
      <div className={classes.blockBody}>
        <p>Title: {title}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Post;
