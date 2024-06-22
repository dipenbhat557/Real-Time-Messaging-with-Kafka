import React from "react";
import { Box, Typography } from "@mui/material";

function ChatMessage({ message, username }) {
  return (
    <Box>
      <Typography
        variant="body1"
        color={message.sender === username ? "primary" : "secondary"}
      >
        <strong>{message.sender}: </strong>
        {message.content}
      </Typography>
    </Box>
  );
}

export default ChatMessage;
