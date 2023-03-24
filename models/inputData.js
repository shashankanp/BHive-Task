const { mongoose } = require("mongoose");

const inputSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    // unique: true,
  },
  // phone: {
  //   type: Number,
  //     unique:true,
  // },
  // opportunity: {
  //   type: String,
  // },
  // terms: {
  //   type: Boolean,
  // },
});

module.exports = mongoose.models.Input || mongoose.model("Input", inputSchema);
