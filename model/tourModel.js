const fs = require('fs');
const path = require('path');

const packagefilePath = path.join(__dirname, '../data/tour.json');

const getAll = () => {
    const packagesData = fs.readFileSync(packagefilePath, 'utf-8');
    return JSON.parse(data);
};

const getById = (id) => {
    const data = fs.readFileSync(packagefilePath, 'utf-8');
    const packages = JSON.parse(data);
    return packages.find((pkg) => pkg.id === id);
};