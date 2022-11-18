import React from 'react';

const ChatContainer = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("h1", null, text);
};

const Chat = ({
  text
}) => {
  return /*#__PURE__*/React.createElement(ChatContainer, {
    text: text
  });
};

export { Chat };
//# sourceMappingURL=index.modern.js.map
