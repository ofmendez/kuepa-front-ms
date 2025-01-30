import { ChatFeed } from 'react-chat-ui';
import { useEffect, useRef } from 'react';
import { bubleStyles } from '@src/styles/chatStyles';
import ChatInput from '@components/ChatInput';
import useChatWebSocket from '@src/hooks/useChatWebSocket';

const ChatPanel = () => {
  const { messages, sendMessage } = useChatWebSocket();
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current)
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className='w-full md:w-1/2 p-3 flex flex-col'>
      <div className='flex-grow overflow-y-auto' style={{ maxHeight: 'calc(100vh - 315px - 16px)' }} ref={chatContainerRef}>
        <ChatFeed
          messages={messages}
          isTyping={false}
          showSenderName
          bubblesCentered={false}
          bubbleStyles={bubleStyles}
        />
      </div>
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatPanel;
