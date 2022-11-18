
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ChatWrapper = styled.h1`
  ${(props) => css`
    color: ${props.color};
  `}
`;
const ChatContainer = ({text}) => {
    return <ChatWrapper color='red'>{text}</ChatWrapper>
}

export default ChatContainer

ChatContainer.defaultProps = {
    text: '',
};
ChatContainer.propTypes = {
    text: PropTypes.node
};