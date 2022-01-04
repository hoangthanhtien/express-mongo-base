const User = require('../models/User.model')
const logger = require('../logger')

exports.getAllUsers = async (req, res) => {
  data = await User.find({})
  logger.log({
    level: 'info',
    type: 'GET',
    message: data
  })
  res.status(200).send(data)
}
