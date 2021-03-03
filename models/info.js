const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    robotModel: { type:String, required: true},
    robotApplication: { type:String, required:true},
    serialNumber: {type:String, required:true},
    endUser: { type:String, required: true},
    integrator: { type:String, required: true},
    stationID: { type:String },
    system: { type:String },
    partDescriptionNumber: { type:String, required:true},
    review: { type: Schema.Types.ObjectId, ref: "Review"}
});

const Info = mongoose.model("Info", infoSchema);

module.exports = Info; 