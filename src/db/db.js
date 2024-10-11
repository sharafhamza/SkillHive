const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  userName: String,
  email: { type: String, unique: true },
  id: ObjectId,
});

const adminSchema = new Schema({});
