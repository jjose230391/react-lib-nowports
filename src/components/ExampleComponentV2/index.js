import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import getChats from "../../data/chat";
import {MainLayoutContext} from "../../context/ChatProvider";

class ExampleV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { onSubmit } = this.props;
    const { socket } = this.context;

    this.verifyConnectionSocket();
    // this.fetchChats();

    //
    socket.on('NewMessage', (data) => {
        onSubmit(data)
    });
  }

  verifyConnectionSocket = () => {
    const { config: { token } } = this.props
    const { socket, onRegisterUserIOToken } = this.context;
    socket.on("connect", () => {
        onRegisterUserIOToken(token)
        if (socket.connected) {
            console.log('socket conectado')
        }else{
            console.log('socket no conectado')
        }
    });
  };

  fetchChats = async () => {
    // const { onChatLoaded } = this.props;

    try {
      const response = await getChats();
      console.log(response, "response");
    } catch (error) {
      console.log(error);
    }
  };

  handleText = (e) => {
    const { onEmitNewMessage } = this.context;
    onEmitNewMessage({ message: e.target.value });
  };

  render() {
    const { children } = this.props;
    return (
      <>
        <h2>{children}</h2>
        <input type="text" onChange={(e) => this.handleText(e)} />
      </>
    );
  }
}

// const ExampleV2 = ({text}) => {
//     return <h2>{text}</h2>
// }
ExampleV2.defaultProps = {
  children: null,
  config: {token: ''},
  onSubmit: () => {}
};
ExampleV2.propTypes = {
  children: PropTypes.node,
  config: PropTypes.shape({token: PropTypes.string}),
  onSubmit: PropTypes.func
};

ExampleV2.contextType = MainLayoutContext;
export default ExampleV2;
