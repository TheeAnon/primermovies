const Series = require('../models/series.model');

exports.createSeries = async (req, res) => {
    try {
        const series = new Series(req.body);
        await series.save();
        res.status(201).json(series);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getSeries = async (req, res) => {
    try {
        const series = await Series.find();
        res.status(200).json(series);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

