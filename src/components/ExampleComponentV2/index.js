import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { RotInput } from "rotterdam-v2";
import getChats from "../../data/chat";
import { MainLayoutContext } from "../../context/ChatProvider";

class ExampleV2 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  componentDidMount() {
    const { onSubmit } = this.props;
    const { socket } = this.context;

    this.verifyConnectionSocket();
    // this.fetchChats();

    //
    socket.on("NewMessage", (data) => {
      onSubmit(data);
    });
  }

  verifyConnectionSocket = () => {
    const {
      config: { token },
    } = this.props;
    const { socket, onRegisterUserIOToken } = this.context;
    socket.on("connect", () => {
      onRegisterUserIOToken(token);
      if (socket.connected) {
        console.log("socket conectado");
      } else {
        console.log("socket no conectado");
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
    this.setState({ text: e.target.value });
    onEmitNewMessage({ message: e.target.value });
  };

  render() {
    const { children } = this.props;
    const { text } = this.state;
    return (
      <>
        <h2>{children}</h2>
        <RotInput
          placeholder="Hola mundo"
          label="Input"
          value={text}
          onChange={(e) => {
            this.handleText(e);
          }}
        />
      </>
    );
  }
}

// const ExampleV2 = ({text}) => {
//     return <h2>{text}</h2>
// }
ExampleV2.defaultProps = {
  children: null,
  config: { token: "" },
  onSubmit: () => {},
};
ExampleV2.propTypes = {
  children: PropTypes.node,
  config: PropTypes.shape({ token: PropTypes.string }),
  onSubmit: PropTypes.func,
};

ExampleV2.contextType = MainLayoutContext;
export default ExampleV2;
