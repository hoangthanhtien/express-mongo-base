const winston = require('winston')
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'debug_logs/combined.log' })
  ]
})

module.exports = logger
