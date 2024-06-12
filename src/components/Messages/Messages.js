import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }) => {
  const renderMessage = (message, i) => (
    <div key={message.id || i}>
      <Message message={message} name={name} />
    </div>
  );

  return (
    <ScrollToBottom className="messages">
      {messages.map(renderMessage)}
    </ScrollToBottom>
  );
};

export default Messages;
