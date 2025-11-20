const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  name: { type: String, required: true },
  PhoneNumber: { type: Number, required: true, unique: true },
  Pincode: { type: Number, required: true },
  Locality: { type: String, required: true },
  Address: { type: String, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true }
});

const AddressModel = mongoose.model('Address', AddressSchema);
module.exports = AddressModel;
