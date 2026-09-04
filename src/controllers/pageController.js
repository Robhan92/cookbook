const pageController = {}

pageController.showIndex = (req, res) => {
  res.render('pages/index.ejs')
}

pageController.showAbout = (req, res) => {
  res.render('pages/about.ejs')
}

pageController.showRecipes = (req, res) => {
  res.render('pages/recipes.ejs')
}

pageController.showContact = (req, res) => {
  res.render('pages/contact.ejs')
}

export default pageController
