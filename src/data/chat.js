import axios from "axios";

const getChats = async ({ token, URL }) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

const getConversation = async ({ token, URL, chatId, socket }) => {
  try {
    const { data } = await axios.get(URL, {
      headers: {
        Authorization: token,
        'X-ACCESS': socket.xAccess,
        'x-chat-id': chatId
      },
    });
    return data
  } catch (error) {
    return error;
  }

};

export { getChats, getConversation }
