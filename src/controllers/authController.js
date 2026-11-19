import Usermodel from '../models/userModel.js'

const authController = {}

// Register
authController.register = async (req, res, next) => {
  try {
      const existing = await Usermodel.findOne({ username: req.body.username })
      console.log(existing)
      if (!existing) {
      const newUser = new Usermodel({
        username: req.body.username,
        password: req.body.password
      })
      await newUser.save()
      res.redirect('/')
    } else {
      res.redirect('/')
    }
  } catch (err) {
    next(err)
  }
}

// Login
authController.login = async (req, res, next) => {
  try {
    //const existing = await Usermodel.findOne({ username: req.body.username })
    //if (existing) {
  } catch (err) {
    next(err)
  }
  
}

// Delete
authController.remove = (req, res) => {
  try {
    
  } catch (err) {
    next(err)
    
  }

}

export default authController
