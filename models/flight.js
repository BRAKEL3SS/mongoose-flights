const mongoose = require("mongoose");

const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: String,
    airport: {type:String, default: 'DEN'},
    flightNo: Number,
    departs: {type:Date, default: Date.now() + 365*24*60*60000}
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)

