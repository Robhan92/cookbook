import Usermodel from '../models/userModel.js'

const authController = {}

// Register
authController.register = async (req, res, next) => {
  try {
      const existing = await Usermodel.findOne({ username: req.body.username })
      if (!existing) {
      const newUser = new Usermodel({
        username: req.body.username,
        password: req.body.password
      })
      await newUser.save()
      res.redirect('/')
    } else {
      console.log("user found") // REMOVE
      res.redirect('/')
    }
  } catch (err) {
    next(err)
  }
}

// Login
authController.login = async (req, res, next) => {
  try {
    
  } catch (err) {
    next(err)
  }
  
}

authController.remove = (req, res) => {

}

export default authController
