const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    location: { type:String, required: true},
    reviewDate: { type:Date, default: Date.now},
    techInitials: {type:String, required:true},
    issues: { type:Boolean, default: true},
    resolvedDayOf: { type:Boolean, default: false},
    notes: { type:String, required: true}
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review; 