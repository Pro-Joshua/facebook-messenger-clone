import React, { useState, useEffect, Component } from "react";
import { Button, InputLabel, Input, FormControl } from "@material-ui/core";
import Message from "./Message";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  //useState for temporary storage
  const [input, setInput] = useState(""); //what user types
  const [messages, setMessages] = useState([]); //what user sends
  const [username, setUsername] = useState();

  useEffect(() => {
    // a listener
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })) //the id refers to firebase a bunch of letters and numbers
        );
      });
  }, []);

  useEffect(() => {
    const question = prompt("Please Enter Your Name");
    const isEmpty = question === "";
    setUsername(isEmpty ? null : question.toLowerCase());
  }, []); //when don't want condition, use [] for onLoad

  const sendMessage = (event) => {
    //preventDefault to prevent default form submition function
    event.preventDefault();
    //all logic is here
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">
          <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=50&h=50"></img>
        </h1>
        <h3 className="title">Welcome {username}</h3>
      </div>
      <FlipMove className="message_container">
        {messages.map((
          { id, message } //username can refer to another person
        ) => (
          <Message
            key={id}
            username={username} //user who logined
            message={message}
          />
        ))}
      </FlipMove>
      <form className="input_container">
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            style={{ flex: 1 }}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            style={{ flex: 0 }}
            className="input_button"
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            disabled={!input}
          >
            <SendIcon></SendIcon>
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
