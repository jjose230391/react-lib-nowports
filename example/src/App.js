import React from 'react'
import { Chat } from 'react-lib-nowports'

const config = {
  language: 'es',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZFVzZXIiOjMwOSwiZW1haWwiOiJ1c2VydGVzdEBtYWlsLmNvbSIsIm5hbWUiOiJKYXptaW4gUmR6IiwicGhvbmVOdW1iZXIiOiI4MTI1MTU2MDQ3Iiwicm9sZSI6InVzZXIiLCJhcmVhIjoiZ2VuZXJhbCIsImV4cCI6MTY3NzI0ODI1ODU3MCwibGFuZ3VhZ2UiOiJlcyIsInNlc3Npb24iOiJiRHgxMEpoaFQwOEJHRnM1VUhscEpQYnNGZDdPd2xhM3hzcjkifQ.cMm-5KBKARr7SDCaFbOpB4EiyNRt9PlJQD9DGNhhByk',
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
    socket: {
      connectionMain: 'ws://localhost:3000',
      path: '/socket',
      xAccess: 'wp5RctyVL4HRRr1Tx09UAvBWLixNz5ze'
    }
  },
  onChatLoaded: () => {},
};

const App = () => {

  const testOnSubmitSocket = (data) => {
    console.log('Data send by props',data)
  }
  return (
      <>
        <Chat text="Chat para todos, pasando onSubmit" config={config} onSubmit={(data)=>testOnSubmitSocket(data)}/>
      </>
  )
}

export default App
