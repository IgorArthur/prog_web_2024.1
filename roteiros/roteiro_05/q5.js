const crypto = require('crypto');

const criptografarMensagem = (texto, chaveSecreta) => {
    const algorithm = 'aes-256-cbc';
    const chaveFormatada = Buffer.from(chaveSecreta.padEnd(32, ' '), 'utf-8');
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, chaveFormatada, iv);
    let encrypted = cipher.update(texto, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
};

const processarNumeros = (numeros, callbackFunction) =>
    numeros
        .filter(num => num % 2 === 0)
        .map(num => callbackFunction(num.toString(), 'chaveSuperSecreta12345678901234'));

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosCriptografados = processarNumeros(numeros, criptografarMensagem);

console.log(numerosCriptografados);
