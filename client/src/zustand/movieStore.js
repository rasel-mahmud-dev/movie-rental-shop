const movieStore = (set, get) => ({
    movies: [],
    setMovies(movies) {
        set({
            movies: movies
        })
    }

})

export default movieStore