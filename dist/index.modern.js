import React from 'react';

var ChatContainer = function ChatContainer(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("h1", null, text);
};

var Chat = function Chat(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(ChatContainer, {
    text: text
  });
};

export { Chat };
//# sourceMappingURL=index.modern.js.map
