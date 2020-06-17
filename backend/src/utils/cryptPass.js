const crypto = require('crypto');

const DADOS_CRIPTOGRAFAR = {
    algoritmo: "aes256",
    segredo: "chaves",
    tipo: "hex"
}

function criptografar(pass){
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo,DADOS_CRIPTOGRAFAR.segredo);   
    cipher.update(pass);
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
}
function descriptografar(pass){
    const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    decipher.update(senha, DADOS_CRIPTOGRAFAR.tipo);
    return decipher.final();
}

module.exports = criptografar;