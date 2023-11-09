const Admin = require('../models/admin');

const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your email or passsword'
      })
    }

    const admin = await Admin.findOne({
      where: {
        email
      }
    })
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin does not exist"
      })
    }
    const payload = {
      id: admin.id,
      username: admin.email
    }
    if (admin.password === password) {
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      })
      admin.token = token;
      admin.password = undefined;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        admin,
        message: "Admin logged in succesfully"
      })
    }

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })

  }
}