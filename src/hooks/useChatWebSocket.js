import { useEffect, useRef, useState } from 'react';
import { Message } from 'react-chat-ui';

const useChatWebSocket = () => {
  const user = JSON.parse(window.localStorage.getItem('user'));

  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(import.meta.env.VITE_WS_URI);

    ws.current.onopen = () => {
      console.log('WebSocket connection established');
      setIsConnected(true);
    };

    ws.current.onmessage = (event) => {
      const msj = JSON.parse(event.data);
      if (msj.type === 'ping')
        return;
      const data = new Message(JSON.parse(event.data));
      if (data.id !== user._id)
        setMessages((prevMessages) => [...prevMessages, data]);
    };

    ws.current.onclose = () => {
      console.log('WebSocket connection closed');
      setIsConnected(false);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = (message) => {
    if (isConnected && ws.current && ws.current.readyState === WebSocket.OPEN) {
      setMessages((prevMessages) => [...prevMessages, message]);
      const senderName = user.role === 'Moderator' ? `📗👁️‍🗨️ (Mod) -${user.name} ` : user.name;
      const toSend = { id: user._id, message: message.message, senderName };
      ws.current.send(JSON.stringify(toSend));
    } else
      console.error('WebSocket is not open. Ready state: ' + ws.current.readyState);
  };

  return { messages, sendMessage };
};

export default useChatWebSocket;
