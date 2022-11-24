import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { RotInput } from "rotterdam-v2";
import getChats from "../../data/chat";
import { MainLayoutContext } from "../../context/ChatProvider";
import Alert from "./components/Alert/Alert";

let time = 0;

class ExampleV2 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "", message: "", onToast: false };
  }

  componentDidMount() {
    const { onSubmit } = this.props;
    const { socket } = this.context;

    this.verifyConnectionSocket();
    // this.fetchChats();

    //
    socket.on("NewMessage", (data) => {
      console.log('NUEVO MENSAJE', data)
      onSubmit(data);

      this.setState({onToast: true})

      if (time) clearTimeout(time);
      time = setTimeout(() => {
        this.setState({onToast: false})
      }, 3000);
      this.setState({message: data.response.payload})
    });
  }

  verifyConnectionSocket = () => {
    const { socket, onRegisterUserIOToken } = this.context;
    socket.on("connect", () => {
      onRegisterUserIOToken();
      if (socket.connected) {
        console.log("socket conectado", socket.id);
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
    const { onEmitNewMessage, config } = this.context;
    const { token } = config;
    this.setState({ text: e.target.value });
    const data = {
      auth:{
        token,
        idChat: 1217,
      },
      type: "Text",
      payload: e.target.value
    }
    onEmitNewMessage(data);
  };

  render() {
    const { children } = this.props;
    const { text, message, onToast } = this.state;
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
        <Alert isVisible={onToast}>{message}</Alert>
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
