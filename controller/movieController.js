const { response } = require('express')
const { body } = require('express-validator')
const request = require('request')
const imageURL = "https://www.themoviedb.org/t/p/original"
const URL = "https://api.themoviedb.org/3/movie/"
const MY_KEY = "29570e7acc52b3e085ab46f6a60f0a55"

exports.getMoveiType = (req, res, next) => {
    const typeToGet = req.params.type
    var pageNum = 0
    var type = ""
    console.log(typeToGet)
    if (typeToGet === "upcoming") {
        type = "Up Coming"
        pageNum = Math.random() * (16 - 1) + 1
    } else if (typeToGet === "top_rated") {
        type = "Top Rate"
        pageNum = Math.random() * (440 - 1) + 1
    } else if (typeToGet === "popular") {
        type = "Popular"
        pageNum = Math.random() * (500 - 1) + 1
    } else if (typeToGet === "now_playing") {
        type = "Now Plying"
        pageNum = Math.random() * (48 - 1) + 1
    } else {
        res.send("type is not supported")
    }

    const apiURL = `${URL}${typeToGet}?api_key=${MY_KEY}&language=en-US&page=${Math.floor(pageNum)}`
        //  const popular = URL + typeToGet + "popular?api_key=" + MY_KEY + "&language=en-US&page=1"
    console.log(apiURL)
        //    console.log(Math.floor(pageNum))
    request(apiURL, (err, response, body) => {
        //console.log(response)
        if (!err & response.statusCode == 200) {
            const results = JSON.parse(body).results
            const info = []
            var i = 0
            results.forEach((item) => {
                    if (i > 5)
                        return
                    if (item.poster_path != null) {
                        const JSON = {
                                movieId: item.id,
                                movieName: item.title,
                                moviePoster: imageURL + item.poster_path
                            }
                            //   console.log(JSON)
                        info.push(JSON)
                        i++
                    }
                })
                // console.log(popular)
            const movieTypeData = {
                category: type,
                info: info
            }

            res.json(movieTypeData)
        } else {
            console.log(err)
            res.send("failed")
        }
    })
}

exports.getMoviePromote = (req, res, next) => {
    var pageNum = Math.random() * (500 - 1) + 1
    const apiURL = `${URL}popular?api_key=${MY_KEY}&language=en-US&page=${pageNum}`
    request(apiURL, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const promoteList = JSON.parse(body).results
            const data = []
            var i = 0
            promoteList.forEach((item) => {
                if (i > 10)
                    return
                if (item.poster_path != null) {
                    const JSON = {
                            movieId: item.id,
                            movieName: item.title,
                            moviePoster: imageURL + item.backdrop_path
                        }
                        //   console.log(JSON)
                    data.push(JSON)
                    i++
                }
            })
            console.log(data)
            res.json(data)
        } else {
            console.log(body)
        }
    })
}

exports.getMovieDetailByID = (req, res, next) => {
    const movieId = req.params.movieId

    const apiURL = `${URL}${movieId}?api_key=${MY_KEY}&language=en-US`

    request(apiURL, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body)
            const detail = JSON.parse(body)
            const genres = detail.genres.map(type => type.name)
            const backDrop = imageURL + detail.backdrop_path
            const poster = imageURL + detail.poster_path
            const release = detail.release_date
            const lang = detail.original_language
            const movieName = detail.title
            const overview = detail.overview
            const movieTime = detail.runtime

            const detailJSON = {
                movieName: movieName,
                genres: genres,
                poster: poster,
                backDrop: backDrop,
                releaseDate: release,
                language: lang,
                overview: overview,
                movieTime: movieTime
            }
            res.json(detailJSON)
                //get genres
                //get movie name
                //get backdrop_path
                //get language
                //get overview
                //get relesae date
        } else {
            console.log(error)
        }
    })
}

exports.getMovieTrailerByID = (req, res, next) => {
    const movieId = req.params.movieId

    const apiURL = `${URL}${movieId}/videos?api_key=${MY_KEY}&language=en-US`
    console.log(apiURL)
    request(apiURL, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const videoData = JSON.parse(body).results
            const videoLink = videoData.map(linkId => {
                const video = {
                    id: linkId.id,
                    src: `https://www.youtube.com/embed/${linkId.key}`
                }
                return video
            })
            console.log(videoLink)
            res.json(videoLink)
        } else {
            console.log(error)
        }
    })
}

exports.getMovieCastByMovieId = (req, res, next) => {
    const movieId = req.params.movieId
    const apiURL = `${URL}${movieId}/credits?api_key=${MY_KEY}&language=en-US`
    console.log(apiURL)
    request(apiURL, (error, response, body) => {
        if (!error & response.statusCode == 200) {
            const castResult = JSON.parse(body).cast
            const castList = []
            castResult.forEach((cast, index) => {
                if (index > 2)
                    return

                const cast_info = {
                    id: cast.cast_id,
                    name: cast.name
                }
                castList.push(cast_info)

            })
            res.json(castList)
        } else {
            console.log(error)
        }
    })
}