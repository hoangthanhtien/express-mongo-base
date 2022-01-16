const User = require('../models/User.model')
const logger = require('../logger')

exports.getAllUsers = async (req, res, next) => {
  // try {
  data = await User.find({})
  const a = 1
  a = 2
  res.status(200).send(data)
  // } catch (error) {
  // logger.log({
  //   level: 'error',
  //   type: 'GET',
  //   message: error
  // })
  // }
}
