import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

let _ = t => t,
  _t,
  _t2;
const ChatWrapper = styled.h1(_t || (_t = _`
  ${0}
`), props => css(_t2 || (_t2 = _`
    color: ${0};
  `), props.color));
const ChatContainer = ({
  text
}) => {
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

const Chat = ({
  text
}) => {
  return /*#__PURE__*/React.createElement(ChatContainer, {
    text: text
  });
};

export { Chat };
//# sourceMappingURL=index.modern.js.map
