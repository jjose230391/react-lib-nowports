import React from 'react';
import Chat from "./components/Chat";
import ExampleV2 from "./components/ExampleComponentV2";

export const ExampleComponent = ({ text }) => {
  return <Chat text={text} />
}
export const ExampleComponentV2 = ({ text }) => {
  return <ExampleV2 text={text} />
}
