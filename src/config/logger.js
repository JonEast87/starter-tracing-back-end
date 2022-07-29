const pinoHttp = require('pino-http')
const { nanoid } = require('nanoid')

const level = process.env.LOG_LEVEL || 'info'

const logger = pinoHttp({
	genReqId: (request) => request.headers['x-request-id'] || nanoid(),
	level,
})

module.exports = logger
