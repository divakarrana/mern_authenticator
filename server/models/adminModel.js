const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please tell us your first name!'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a ssn'],
    minlength: 8,
    select: false,
  }
});

adminSchema.pre('save', async function (next) {
  //Hash the ssn with the cost of 12 -- Auto-generated salt and hash
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

//Attaching method into schema for password comparison
adminSchema.methods.correctPassword = async function (candidatePass, userPass) {
  return await bcrypt.compare(candidatePass, userPass);
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
