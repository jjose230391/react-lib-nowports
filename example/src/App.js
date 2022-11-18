import React from 'react'
import { Chat } from 'react-lib-nowports'

const config = {
  language: 'es',
  token: '',
  userId: 1,
  businessId:12,
  options: {
    isLite: {
      custom:''
    },
    connectionsBySection: {
      chatsList: {
        getConversation: '/chat',
        getUpdates: 'endpoint',
        getContacts: 'chat/participants/candidates?idBusiness=00',
        socketEventToUpdates: 'shipmentUpdate'
      },
      chatDetails:{
        getMessages: 'chat/payload',
        postMessage: 'participant/lastRead',
        sendFiles: '',
        deleteChat: '',
        socketEvent: 'NewMessage'
      },
      createNewChat: {
        newChat: 'endpoint',
      },
    },
    connectionSocketMain: '',
  },
  onChatLoaded: () => {},
};

const App = () => {
  return (
      <>
        <Chat text="Chat para ivan" />
      </>
  )
}

export default App
