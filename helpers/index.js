const dbValidators  = require('./db_validations');
const generarJWT    = require('./json_web_tokens');

module.exports = {
    ...dbValidators,
    ...generarJWT
}