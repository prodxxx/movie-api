const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}




const getMoviesBySearch = (request, response) => {
  const { searchTerm } = request.params

  let foundMoviesByTitle = movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))

  let foundMoviesByDirector = (movies.filter((movie) => {
    for (let director of movie.directors) {
      if (director.toLowerCase().includes(searchTerm.toLowerCase())) return true
    }
  }))

  let foundMovies = [...new Set([...foundMoviesByTitle, ...foundMoviesByDirector])]

  return (foundMovies.length > 0 ? response.send(foundMovies) : response.status(404).send('No movies found.'))
}








module.exports = { getAllMovies, getMoviesBySearch }
