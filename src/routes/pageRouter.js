import express from 'express'
import pageController from '../controllers/pageController.js'

const pageRouter = express.Router()

pageRouter.get('/', pageController.showIndex)
pageRouter.get('/about', pageController.showAbout)
// recipes
// contact

export default pageRouter