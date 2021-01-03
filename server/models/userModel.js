const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please tell us your first name!'],
  },
  lastname: {
    type: String,
    required: [true, 'Please tell us your last name!'],
  },
  telephone: {
    type: Number,
    required: [true, 'Please provide your telephone!'],
    unique: [true, 'This number is already present with us. Try with a different telephone?'],
  },
  ssn: {
    type: String,
    required: [true, 'Please provide a ssn'],
    minlength: [8, 'A SSN must have more or equal to 8 characters'],
    select: false,
  },
  address: {
    type: String,
    required: [true, 'Please provide your address'],
    minlength: [10, 'Address must have more or equal to 10 characters'],
  }
});

userSchema.pre('save', async function (next) {
  //Hash the ssn with the cost of 12 (Auto-generate hash and salt)
  this.ssn = await bcrypt.hash(this.ssn, 12);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
