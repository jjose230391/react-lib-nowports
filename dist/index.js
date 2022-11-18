function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var PropTypes = _interopDefault(require('prop-types'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2;
var ChatWrapper = styled__default.h1(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n"])), function (props) {
  return styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    color: ", ";\n  "])), props.color);
});
var ChatContainer = function ChatContainer(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(ChatWrapper, {
    color: "red"
  }, text);
};
ChatContainer.defaultProps = {
  text: ''
};
ChatContainer.propTypes = {
  text: PropTypes.node
};

var Chat = function Chat(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(ChatContainer, {
    text: text
  });
};

exports.Chat = Chat;
//# sourceMappingURL=index.js.map
