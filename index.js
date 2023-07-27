require('dotenv/config')
const server = require("./server")

const app = server.init()

module.exports = app