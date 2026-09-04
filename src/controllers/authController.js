import Usermodel from '../models/userModel.js'

const authController = {}

// Create
authController.create = async (req, res, next) => {
  try {
      const existing = await Usermodel.findOne({ username: req.body.username })
      console.log(res.locals)
      if (!existing) {
      const newUser = new Usermodel({
        username: req.body.username,
        password: req.body.password
      })
      await newUser.save()
      res.redirect('/')
    } else {
      console.log("user found")
    }
  } catch (err) {
    next(err)
  }
}

authController.remove = (req, res) => {

}

export default authController
