// ASSOCIATIONS

const Surfer = require('./surfer');
const Location = require('./location');
const SurferLocation = require('./surferLocation');

Surfer.belongsToMany(Location, {
    through: SurferLocation,
    foreignKey: 'surfer_id', // This is the foreign key column in SurferLocation
});

Location.belongsToMany(Surfer, {
  through: SurferLocation,
  foreignKey: 'location_id', // This is the foreign key column in SurferLocation
});

module.exports = {
    Surfer,
    Location,
    SurferLocation
};
