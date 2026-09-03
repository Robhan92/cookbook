const pageController = {}

pageController.showIndex = (req, res) => {
  res.render('pages/index.ejs')
}

pageController.showAbout = (req, res) => {
  res.render('pages/about.ejs')
}

export default pageController
