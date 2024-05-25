const mongoose = require('mongoose');


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
    seasons: [String],
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
