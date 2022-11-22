import React, {createContext} from "react";
import PropTypes from "prop-types";
import openSocket from "socket.io-client";

export const MainLayoutContext = createContext({});

const ChatProvider = (props) => {
  const { children, config } = props;

  const {
    options: {
      socket: { connectionMain, path, xAccess },
    },
    token,
  } = config;

    const socket = openSocket(connectionMain, {
        transports: ["websocket"],
        path,
        withCredentials: true,
        transportOptions: {
            polling: {
                extraHeaders: {
                    "X-ACCESS": xAccess,
                },
            },
        },
    });

  const registerUserIOToken = () => {
      socket.emit("registerUserIOToken", { token, id: socket.id });
  };

  const emitNewMessage = (request) => {
      socket.emit("NewMessage", request);
  };

  return (
    <MainLayoutContext.Provider
      value={{
        config,
        socket,
        onRegisterUserIOToken: () => registerUserIOToken(),
        onEmitNewMessage: (request) => emitNewMessage(request),
      }}
    >
      {children}
    </MainLayoutContext.Provider>
  );
};

ChatProvider.defaultProps = {
  children: null,
  config: {
    options: { socket: { connectionMain: "", path: "", xAccess: "" } },
    token: "",
  },
};
ChatProvider.propTypes = {
  children: PropTypes.node,
  config: PropTypes.shape({
    options: PropTypes.shape({
      socket: PropTypes.shape({
        connectionMain: PropTypes.string,
        path: PropTypes.string,
        xAccess: PropTypes.string,
      }),
    }),
    token: PropTypes.string,
  }),
};

export default ChatProvider;
