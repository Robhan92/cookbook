import express from 'express'
import pageController from '../controllers/pageController.js'

const pageRouter = express.Router()

pageRouter.get('/', pageController.showIndex)
pageRouter.get('/about', pageController.showAbout)
pageRouter.get('/recipes', pageController.showRecipes)
pageRouter.get('/contact', pageController.showContact)

export default pageRouter