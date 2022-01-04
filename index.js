const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Connect to MongoDB
const mongoose = require('mongoose');
// const mongodbUrl = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mongodb:${process.env.MONGODB_LOCAL_PORT}/${process.env.MONGODB_DATABASE}`
const mongodbUrl = `mongodb://localhost:27017/test`
try {
  mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongodb!")
} catch (error) {
  console.log(error)
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to the database");
});

// Routers
const UserRouter = require('./src/routers/User.router')
app.use('/users', UserRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
