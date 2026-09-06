const tourModel = require('../model/tourModel');

const getAllTours = (req, res) => {
    const packages = tourModel.getAll();
    res.json(packages);
};
const getTourById = (req, res) => {
    const id = Number(req.params.id);
    const package = tourModel.getById(id);
    if(tour){
        res.status(200).json(tour);
    } else {
        res.status(404).json({ message: 'Tour package not found' });
    }
};

module.exports = {
    getAllTours,
    getTourById
};
