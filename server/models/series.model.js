const mongoose = require('mongoose');

const EpisodeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Episode title must be included"]
    },
    description: {
        type: String,
        required: [true, "Episode description must be included"]
    },
    duration: {
        type: Number,
        required: [true, "Episode duration must be included"]
    },
    releaseDate: {
        type: Date,
    },
    poster: {
        type: String,
    },
}, { _id: false });

const SeasonSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: [true, "Number of seasons must be included"]
    },
    poster: {
        type: String,
    },
    episodes: [EpisodeSchema],
}, { _id: false });

const SeriesSchema = new mongoose.Schema({
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
    poster: {
        type: String,
        required: [true, "Poster URL must be included"]
    },
    releaseDate: {
        type: Date,
    },
    seasons: [SeasonSchema], // Array of seasons
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
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { collection: 'series' });

module.exports = mongoose.models.Series || mongoose.model('series', SeriesSchema);
