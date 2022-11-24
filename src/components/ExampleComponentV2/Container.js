import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Row,
  Col,
  RotCard,
  RotChatItem,
  RotMessage,
  RotTextArea,
} from "rotterdam-v2";

import { MainLayoutContext } from "../../context/ChatProvider";

import { getConversation } from "../../data/chat";

class ChatMainCointainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      participants: []
    };
  }

  onChangeState = (key, value) => {
    this.setState({ [key]: value });
    if (key === "chatId") {
      this.fetchConversation(value);
    }
  };

  fetchConversation = async (chatId) => {
    try {
      const { config } = this.context;
      const { token, options } = config || {};
      const { connectionsBySection, socket } = options || {};

      const { chatDetails } = connectionsBySection || {};
      const { getMessages } = chatDetails || {};
      const { data, status } = await getConversation({
        token,
        URL: getMessages,
        chatId,
        socket
      });

      if (status === "success") {
        this.setState({
          messages: data.messages,
          participants: data.participants,
        });
      }
      return data;
    } catch (error) {
      return(error);
    }
  };

  render() {
    const { conversationList, handleText } = this.props;
    const { messages, participants } = this.state;
    const { config } = this.context;

    return (
      <Row gutter={4} justify="center">
        <Col span={7}>
          <RotCard
            span={24}
            title="Mensajes"
            displayBorder
            displayHover={false}
            className="rot-card"
            dataTour="rot-card"
          >
            <div
              style={{ height: "550px", overflow: "auto", marginBottom: 20 }}
            >
              {conversationList.length > 0 &&
                conversationList.map(({ title, img, idChat }) => {
                  return (
                    <div
                      key={idChat}
                      role='presentation'
                      onClick={() => this.onChangeState("chatId", idChat)}
                    >
                      <RotChatItem
                        theme="primary"
                        key={idChat}
                        chat={{
                          active: true,
                          id: idChat,
                          idChat,
                          img,
                          payload: "Tú: Hola",
                          timeLastMessage: "hace 8 horas",
                          title,
                          unreadMessages: 3,
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </RotCard>
        </Col>
        <Col span={10}>
          <RotCard
            span={24}
            displayBorder
            displayHover={false}
            className="rot-card"
            dataTour="rot-card"
          >
            <div
              style={{ height: "525px", overflow: "auto", marginBottom: 20 }}
            >
              {messages.length > 0
                ? messages.map(({ payload, idMessage, name, idUser }) => (
                    <RotMessage
                      key={idMessage}
                      float={config.userId !== idUser ? "left" : "right"}
                      text={payload}
                      createdAt="2019-08-27"
                      name={config.userId !== idUser ? name : null}
                      outline={config.userId !== idUser}
                    />
                  ))
                : null}
            </div>

            <RotTextArea
              id="text-area-id"
              name="text-area-name"
              key="text-area-key"
              placeholder="Escribe un mensaje"
              onChange={(event) => handleText(event)}
            />
          </RotCard>
        </Col>
        <Col span={5}>
          <RotCard
            span={24}
            title="Informacion del grupo"
            displayBorder
            displayHover={false}
            className="rot-card"
            dataTour="rot-card"
          >
            <div className="tesxtp">
            {participants.length > 0
                ? participants.map(({ name }) => (
                    <div key={name}>{name}</div>
                  ))
                : null}
            </div>
          </RotCard>
        </Col>
      </Row>
    );
  }
}

ChatMainCointainer.contextType = MainLayoutContext;
ChatMainCointainer.defaultProps = {
    conversationList: [],
};

ChatMainCointainer.propTypes = {
    conversationList: PropTypes.arrayOf(),
};



export default ChatMainCointainer;
