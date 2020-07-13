import React, { forwardRef } from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import FlipMove from "react-flip-move";
import "./Message.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = message.username === username;

  return (
    <div ref={ref} className={`message_card ${isUser && "message_user"}`}>
      <Card className={isUser ? "message_userCard" : "message_guestCard"}>
        <CardContent>
          <Typography
            className={
              isUser ? "message_userCardTtext" : "message_guestCardText"
            }
            variant="h5"
            component="h2"
          >
            {!isUser && `${message.username || "Unknown User"}: `}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
