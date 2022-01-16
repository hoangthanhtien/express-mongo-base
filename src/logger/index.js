const winston = require('winston')
require('winston-mongodb')
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'debug_logs/combined.log' }),
    new winston.transports.MongoDB(
      {
        db: 'mongodb://localhost:27017/test',
        collection: 'logs',
        options: {
          useUnifiedTopology: true,
        },
        level: 'error'
      },
    )
  ]
})


module.exports = logger
