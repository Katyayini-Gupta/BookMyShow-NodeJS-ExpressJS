const mongoose = require("mongoose");

//create movies schema
const MoviesSchema = mongoose.Schema({
    imageurl: String,
    title: String,
    actor: String,
    genres: String,
    likes: Number,
    votes: Number
});

const MoviesModel = mongoose.model("movies", MoviesSchema);

module.exports = MoviesModel;