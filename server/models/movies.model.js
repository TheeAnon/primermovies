const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must be included"]
    },
    description: {
        type: String,
        required: [true, "Description must be included"]
    },
    genre: {
        type: [String],
        required: [true, "Genre must be included"]
    },
    releaseDate: {
        type: Date,
        required: [true, "Release date must be included"]
    },
    duration: {
        type: Number,
        required: [true, "Duration must be included"] // duration in minutes
    },
    director: {
        type: String,
    },
    cast: [{
        name: String,
        role: String
    }],
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    poster: {
        type: String,
        required: [true, "Poster URL must be included"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { collection: 'movies' });

module.exports = mongoose.models.Movie || mongoose.model('movie', MovieSchema);
