
import crypto from 'crypto';
import { names, cities } from '../data.json';


const EncryptionModule = () => {
    let message = {
        name: names[Math.floor(Math.random() * names.length)],
        origin: cities[Math.floor(Math.random() * cities.length)],
        destination: cities[Math.floor(Math.random() * cities.length)]
    }

    let hashed = Object.assign({}, message, { secret_key: crypto.createHash('sha256').update(JSON.stringify(message)).digest('hex') });

    const algorithm = 'aes-256-ctr';
    const secretKey = 'secretKey2023';
    const iv = 'syooknode';

    let cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    let encryptedMessage = Buffer.concat([cipher.update(JSON.stringify(hashed)), cipher.final()]).toString('hex');

    return encryptedMessage;
}

export default EncryptionModule