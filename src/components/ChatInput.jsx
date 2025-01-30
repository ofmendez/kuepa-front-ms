import { inputStyles } from '@src/styles/chatStyles';
import { Message } from 'react-chat-ui';
import { useEffect, useRef } from 'react';

const ChatInput = ({ sendMessage }) => {
  const inputRef = useRef(null);

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      sendMessage(new Message({ id: 0, message: e.target.value }));
      e.target.value = '';
    }
  };

  useEffect(() => inputRef.current?.focus(), []);
  return (
    <div className='chat-input sticky bottom-0' style={inputStyles.chat}>
      <input
        type='text'
        style={inputStyles.input}
        placeholder='Escribe el mensaje...'
        onKeyUp={onKeyUp}
        ref={inputRef}
      />
    </div>
  );
};

export default ChatInput;
