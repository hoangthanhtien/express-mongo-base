const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
  firstName: String, // String is shorthand for {type: String}
  lastName: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  dateCreated: { type: Date, default: Date.now },
  dateUpdated: { type: Date },
});

UserSchema.pre('save', async (next) => {
  this.dateUpdated = Date.now()
  this.password = await hashPassword(this.password)
  next()
})

const hashPassword = async (password) => {
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      throw err;
    }
    return hashedPassword
  });
}

module.exports = mongoose.model("User", UserSchema)
