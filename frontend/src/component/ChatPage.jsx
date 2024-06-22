import { useState, useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client/dist/sockjs";
import ChatMessage from "./ChatMessage.jsx";
import { Button, TextField, Container, Box } from "@mui/material";

function ChatPage({ username }) {
  const [messages, setMessages] = useState([]);
  const [client, setClient] = useState(null);
  const messageInputRef = useRef();

  useEffect(() => {
    const newClient = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      onConnect: () => {
        console.log("Connected to WebSocket");
        const joinMessage = {
          sender: username,
          type: "CONNECT",
        };
        newClient.publish({
          destination: "/app/chat.add-user",
          body: JSON.stringify(joinMessage),
        });
        newClient.subscribe("/topic/public", (message) => {
          const newMessage = JSON.parse(message.body);
          console.log("Received message:", newMessage);
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
      },
      onDisconnect: () => {
        console.log("Disconnected from WebSocket");
        if (newClient.connected) {
          const leaveMessage = {
            sender: username,
            type: "DISCONNECT",
          };
          newClient.publish({
            destination: "/app/chat.add-user",
            body: JSON.stringify(leaveMessage),
          });
        }
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });

    newClient.activate();
    setClient(newClient);

    return () => {
      if (newClient.connected) {
        const leaveMessage = {
          sender: username,
          type: "DISCONNECT",
        };
        newClient.publish({
          destination: "/app/chat.add-user",
          body: JSON.stringify(leaveMessage),
        });
      }
      newClient.deactivate();
    };
  }, [username]);

  const sendMessage = (e) => {
    e.preventDefault(); // Prevent form submission from causing a page reload
    if (messageInputRef.current.value && client && client.connected) {
      const chatMessage = {
        sender: username,
        content: messageInputRef.current.value,
        type: "CHAT",
      };
      client.publish({
        destination: "/app/chat.send-message",
        body: JSON.stringify(chatMessage),
      });
      console.log("Sent message:", chatMessage);
      messageInputRef.current.value = "";
    }
  };

  return (
    <Container>
      <Box>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} username={username} />
        ))}
      </Box>
      <form onSubmit={sendMessage}>
        <TextField inputRef={messageInputRef} placeholder="Type a message..." />
        <Button type="submit">Send</Button>
      </form>
    </Container>
  );
}

export default ChatPage;
