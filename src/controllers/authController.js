import Usermodel from '../models/userModel.js'

const authController = {}

authController.showIndex = (req, res) => {
  res.render('pages/index.ejs')
}

// Create
authController.create = async (req, res, next) => {
  try {
      console.log('body:', req.body)
      const newUser = new Usermodel({
        username: req.body.username,
        password: req.body.password
      })
      await newUser.save()
      res.redirect('/')
  } catch (err) {
    next(err)
  }
}

authController.remove = (req, res) => {

}

export default authController
