import Usermodel from '../models/userModel.js'
//import bcryptjs from 'bcryptjs'

const authController = {}

authController.showIndex = (req, res) => {
  res.render('pages/index.ejs')
}

authController.create = async (req, res, next) => {
  try {
    const newUser = new Usermodel({
      name: req.body.name, 
      password: req.body.password,
    })
    await newUser.save()
  } catch (err) {
    next(err)
  }
}

authController.remove = (req, res) => {

}

export default authController
