import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import ExampleV2 from "../ExampleComponentV2";
import ChatProvider from "../../context/ChatProvider";

const ChatWrapper = styled(ExampleV2)`
  ${(props) => css`
    color: ${props.color};
  `}
`;
const ChatContainer = (props) => {
  const { text, onSubmit, config } = props;

  return (
    <ChatProvider config={config}>
      <ChatWrapper color="blue" onSubmit={(s) => onSubmit(s)}>
        {text}
      </ChatWrapper>
    </ChatProvider>
  );
};

export default ChatContainer;

ChatContainer.defaultProps = {
  text: "",
  onSubmit: () => {},
  config: {},
};
ChatContainer.propTypes = {
  text: PropTypes.node,
  onSubmit: PropTypes.func,
  config: PropTypes.shape({}),
};
