import openSocket from 'socket.io-client';

// eslint-disable-next-line import/prefer-default-export
export const socket = openSocket('ws://localhost:3000', {
    transports: ['websocket'],
    path: '/socket',
    withCredentials: true,
    transportOptions: {
        polling: {
            extraHeaders: {
                'X-ACCESS': '',
            },
        },
    },
});

// export const registerUserIOToken = (token) => {
//   socket.emit('registerUserIOToken', { token, id: socket.id });
// };

// export const emitPostedMessage = (request) => {
//   socket.emit('newMessage', request);
// };

// export const emitNewMessage = (request) => {
//   socket.emit('NewMessage', request);
// };

// export const sendUserMessage = (request) => {
//   socket.emit('newMessage', request);
// };
//
// export const emitPostedChat = (request, idUser) => {
//   const body = { data: request, idUser };
//   socket.emit('chatPosted', body);
// };
//
// export const registerNotificationReaded = (idNotification) => {
//   socket.emit('notificationRead', idNotification);
// };
//
// export const registerNotificationUnReaded = (idNotification) => {
//   socket.emit('notificationUnRead', idNotification);
// };
//
// export const setNotificationDelete = (idNotification) => {
//   socket.emit('notificationDelete', idNotification);
// };
//
// export default socket;
