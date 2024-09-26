    const mongoose = require('mongoose');

    const startupSchema = new mongoose.Schema({
    sector: {
        type: String,
        required: true,
    },
    problem: {
        type: String,
        required: true,
    },
    technology: {
        type: String,
        required: true,
    },
    market: {
        type: String,
        required: true,
    },
    idea: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    });

    const Startup = mongoose.model('Startup', startupSchema);
    module.exports = Startup;
