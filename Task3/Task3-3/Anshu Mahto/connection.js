const mongoose = require("mongoose");

const connectMongo = async (url) => {
  return mongoose.connect(url);
};

module.exports = {
  connectMongo,
};
