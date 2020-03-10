// ----------------------------------------------------------------------------------------------
//  External Dependencies
// ----------------------------------------------------------------------------------------------
const mongoose = require('mongoose');

// ----------------------------------------------------------------------------------------------
//  Schema Setup
// ----------------------------------------------------------------------------------------------
const roomSchema = new mongoose.Schema({
    players: Array,
    roomId: String
});

module.exports = mongoose.model('room', roomSchema);