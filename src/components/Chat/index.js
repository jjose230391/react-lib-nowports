
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import ExampleV2 from '../ExampleComponentV2';

const ChatWrapper = styled.h1`
  ${(props) => css`
    color: ${props.color};
  `}
`;
const ChatContainer = ({ text }) => {
    return <ExampleV2>{text}</ExampleV2>
}

export default ChatContainer

ChatContainer.defaultProps = {
    text: '',
};
ChatContainer.propTypes = {
    text: PropTypes.node
};