const uuid = require('uuid')

module.exports = process.env.GLOBAL_JWT_ENCRYPT || uuid.v4()