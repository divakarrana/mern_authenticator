const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
    await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      telephone: req.body.telephone,
      address: req.body.address,
      ssn: req.body.ssn,
    });

    res.status(201).json({
      status: 'success',
      message: "User added. Thanks for sharing the information with us!"
    });
});

exports.listUsers = catchAsync(async (req, res, next) => {
  const usersList = await User.find({});

  res.status(200).json({
        status: 'success',
        token: res.locals.token,
        data: {
          usersList,
        },
      });
});