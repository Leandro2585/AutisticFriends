const crypto = require('crypto');
function encrypt(pass){
  const cryptPass = crypto.createHash('md5').update(pass).digest('hex');
  return cryptPass;
}


module.exports = {
  encrypt
}
