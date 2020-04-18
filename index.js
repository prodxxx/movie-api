const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMoviesBySearch } = require('./controllers/movies')


const app = express()

app.get('/', getAllMovies)

app.post('/movies', bodyParser.json())

app.get('/:searchTerm', getMoviesBySearch)

app.listen(1337, () => {
  console.log('listening on port 1337...') // eslint-disable-line no-console
})
