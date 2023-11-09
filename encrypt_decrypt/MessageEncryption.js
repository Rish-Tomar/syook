import Encryption from "./EncryptionModule.js";

const MessageEncryption = () => {
    let min = 49;
    let max = 499;
    let random = Math.floor((Math.random() * (max - min) + min));
    let encryptedmessage = "";
    for (let i = 0; i < random; i++) {
        encryptedmessage += Encryption() + '|';
    }
    return encryptedPayload;
}

export default MessageEncryption
