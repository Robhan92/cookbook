import express from 'express'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import authController from '../controllers/authController.js'

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

const authRouter = express.Router()

authRouter.post('/register', authController.register)

export default authRouter