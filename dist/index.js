function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Chat = function Chat(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("h1", null, text);
};

var ExampleV2 = function ExampleV2(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("h2", null, text);
};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement(Chat, {
    text: text
  });
};
var ExampleComponentV2 = function ExampleComponentV2(_ref2) {
  var text = _ref2.text;
  return /*#__PURE__*/React.createElement(ExampleV2, {
    text: text
  });
};

exports.ExampleComponent = ExampleComponent;
exports.ExampleComponentV2 = ExampleComponentV2;
//# sourceMappingURL=index.js.map
