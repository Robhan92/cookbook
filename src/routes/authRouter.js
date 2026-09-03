import express from 'express'
import authController from '../controllers/authController.js'


const authRouter = express.Router()

authRouter.get('/', authController.showIndex)

authRouter.post('/create', authController.create)

export default authRouter