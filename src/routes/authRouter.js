import express from 'express'
import authController from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/create', authController.create)

export default authRouter