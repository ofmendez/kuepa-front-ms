import Layout from '@src/layouts/Layout';
import { useState, useEffect, useRef } from 'react';
import '@styles/Loading.css';
import { ChatFeed, Message } from 'react-chat-ui';
import { bubleStyles, inputStyles } from '@src/styles/chatStyles';

function Home () {
  const [messages, setMessages] = useState([
    // new Message({ id: 1, message: 'Hellowww!', senderName: 'Fabian M.' }),
  ]);
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      setMessages([...messages, new Message({ id: 0, message: e.target.value })]);
      e.target.value = '';
    }
  };

  useEffect(() => {
    if (chatContainerRef.current)
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (inputRef.current)
      inputRef.current.focus();
  }, []);

  return (
    <Layout>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 p-3'>
          <iframe
            width='100%'
            height='315'
            src='https://www.youtube.com/embed/5_sI5PmNCIg?si=nEUlzXe18qes3Tec'
            title='Kuepa Live'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
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
          <div className='chat-input sticky bottom-0' style={inputStyles.chat}>
            <input
              type='text'
              style={inputStyles.input}
              placeholder='Escribe el mensaje...'
              onKeyUp={onKeyUp}
              ref={inputRef}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
