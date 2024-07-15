const {uuidv4} = require('../plugins/get-id.plugin');
const {getAge} = require('../plugins/get-age.plugin');
const {http} = require('../plugins/http-client.plugin');
const buildLogger = require('../plugins/logger.plugin');

module.exports = {
    uuidv4,
    getAge,
    http,
    buildLogger,
}

