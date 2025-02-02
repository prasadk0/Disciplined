// const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter name'],
  },
  email: {
    type: String,
    required: [true, 'Please Enter mail'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid mail'],
  },
  password: {
    type: String,
    required: [true, 'Please Enter a password'],
    minlength: 5,
    select: false, 
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password'],
    minlength: 5,
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: 'Password & confirm password did not match!',
    },
  },
});


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
});


userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

const User = mongoose.model('User', userSchema);

export default User;
