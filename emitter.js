
import { io } from 'socket.io-client';
import MessageEncryption from './encrypt_decrypt/MessageEncryption';
const socket = io("http://localhost:8005");

let payload = MessageEncryption()


socket.on('connect', () => {
    console.log('on connect');
    console.log(socket.connected);
    socket.emit("encryptedMessage", payload, (response) => {
        console.log('client message : ', response.status);
    });
});

socket.on("disconnect", () => {
    console.log(socket.connected); // false
});

socket.on("connect_error", () => {
    console.log('connection error retrying..');
    setTimeout(() => { socket.connect(); }, 1000);
});