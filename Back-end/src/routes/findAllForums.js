const { Forum } = require('../db/sequelize')
const auth = require('../auth/auth')

//Token
// const auth = require('../auth/auth')
// app.get('/api/forums', auth, (req, res) => {
  
module.exports = (app) => {
  app.get('/api/forums', (req, res) => {
    Forum.findAll()
      .then(forums => {
        const message = 'La liste des méssages a bien été récupérée.'
        res.json({ message, data: forums })
      })
      .catch(error => {
        const message = "La liste des méssages n'a pas pu etre récupérée. Réessayez dans quelques instants."
        res.status(500).json({ message, data: error })
      })
  })
}