import React from 'react';
import PropTypes from "prop-types";
import ChatContainer from './components/Chat';


// eslint-disable-next-line import/prefer-default-export
export const Chat = ({ text, onSubmit, config }) => {
  return (
      <ChatContainer
        text={text}
        onSubmit={(s)=>onSubmit(s)}
        config={config}
      />
  )
}

Chat.defaultProps = {
  text: '',
  onSubmit: () => {},
  config: {}
};
Chat.propTypes = {
  text: PropTypes.node,
  onSubmit: PropTypes.func,
  config: PropTypes.shape({})
};

