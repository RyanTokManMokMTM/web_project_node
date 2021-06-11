const express = require("express")
const route = express.Router()
const controller = require("../controller/movieController")
route.get("/movie_detail/:movieId", controller.getMovieDetailByID)
route.get("/movie_trailer/:movieId", controller.getMovieTrailerByID)
route.get("/movie_cast/:movieId", controller.getMovieCastByMovieId)
route.get("/movie_promote", controller.getMoviePromote)
route.get("/:type", controller.getMoveiType)
module.exports = route