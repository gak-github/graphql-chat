import React, { useRef, useEffect } from 'react';
const MessageList = (props) => {
  const boxRef = useRef();
  
  useEffect(() => {
    const box = boxRef.current;
    // scroll to bottom to make the last message visible
    box.scrollTo(0, box.scrollHeight);
  });

  const { user, messages } = props;

  const renderMessage = (message) => {
    let tag = 'tag';
    if (message.from === user) {
      tag += ' is-primary';
    }
    return (
      <tr key={message.id}>
        <td><span className={tag}>{message.from}</span></td>
        <td style={{paddingLeft: '0.75em'}}>{message.text}</td>
      </tr>
    );
  };

  return (
    <div ref={boxRef} className="box" style={{height: '50vh', overflowY: 'scroll'}}>
      <table>
        <tbody>
          {messages.map(renderMessage)}
        </tbody>
      </table>
    </div>
  );
};

export default MessageList;
