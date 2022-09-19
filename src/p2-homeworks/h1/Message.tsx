import React from "react";
import classes from "./Message.module.css";

type messageDataType = {
  avatar: string;
  name: string;
  message: string;
  time: string;
};

function Message(props: messageDataType) {
  return (
    <div className={classes.container}>
      <img className={classes.avatar} src={props.avatar} alt="avatar" />
      <div className={classes.angel} />
      <div className={classes.messageBody}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.message}>{props.message}</div>
        <div className={classes.time}>{props.time}</div>
      </div>
    </div>
  );
}

export default Message;
