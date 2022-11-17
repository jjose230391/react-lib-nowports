import React from 'react';

const Chat = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("h1", null, text);
};

const ExampleV2 = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("h2", null, text);
};

const ExampleComponent = ({
  text
}) => {
  return /*#__PURE__*/React.createElement(Chat, {
    text: text
  });
};
const ExampleComponentV2 = ({
  text
}) => {
  return /*#__PURE__*/React.createElement(ExampleV2, {
    text: text
  });
};

export { ExampleComponent, ExampleComponentV2 };
//# sourceMappingURL=index.modern.js.map
