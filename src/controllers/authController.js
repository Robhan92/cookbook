//import Usermodel from '../models/userModel.js'
//import bcryptjs from 'bcryptjs'

const authController = {}

authController.showIndex = (req, res) => {
  res.render('pages/index.ejs')
}

export default authController
