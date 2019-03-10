import React from "react";
import store from "../store/index";
import {setTypingValue,sendMessage} from "../actions";
import "./MessageInput.css";

const MessageInput = ({value}) => {
  const state = store.getState();

  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const {typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId)); //action dispatched using sendMessage action creator
  };

  return (
    <form className = "Message" onSubmit = {handleSubmit}>
      <input className = "Message_Input" onChange = {handleChange} value = {value} placeholder = "Write a message" />
    </form>
  );
};

export default MessageInput;
