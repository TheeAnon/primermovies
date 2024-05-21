const Movie = require('../models/movies.model');

exports.createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await series.save();
        res.status(201).json(series);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getMovie = async (req, res) => {
    try {
        const series = await Series.find();
        res.status(200).json(series);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

