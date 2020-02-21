const mongoose = require('mongoose');
const db = require('src/config/keys.js');

mongoose
    .connect(db.MongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log("MongoDB connected successfully"))
    .catch(() => console.log(err + JSON.stringify(err, undefined, 2)));

module.exports = mongoose;