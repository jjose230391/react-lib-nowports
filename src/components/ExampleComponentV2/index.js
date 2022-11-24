/* eslint-disable no-console */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { getChats } from "../../data/chat";
import { MainLayoutContext } from "../../context/ChatProvider";
import Alert from "./components/Alert/Alert";

import ChatMainCointainer from "./Container";

let time = 0;

class ExampleV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      conversationList: [],
      onToast: false,
    };
  }

  componentDidMount() {
    const { onSubmit } = this.props;
    const { socket } = this.context;

    this.fetchChats();
    this.verifyConnectionSocket();
    socket.on("NewMessage", (data) => {
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
    const { config } = this.context;
    const { token, options } = config || {};
    const { connectionsBySection } = options || {};
    const { chatsList } = connectionsBySection || {};
    const { getConversations } = chatsList || {};
    try {
      const { data, status } = await getChats({ token, URL: getConversations });
      if (status === "success") {
        this.setState({
          conversationList: data.direct,
        });
      }
      return data;
    } catch (error) {
      return error;
    }
  };

  render() {
    const { children } = this.props;
    const { message, onToast, conversationList } = this.state;

    return (
      <div style={{ background: "#FAFAFF", height: "100vh" }}>
        {children}
        <Alert isVisible={onToast}>{message}</Alert>
        <ChatMainCointainer conversationList={conversationList} />
      </div>
    );
  }
}

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
