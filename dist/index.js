function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

exports.Chat = Chat;
//# sourceMappingURL=index.js.map
