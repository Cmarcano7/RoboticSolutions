const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/roboticSolutions"
);

const reviewSeed = [
    {
        location: "Tesla",
        date: new Date(Date.now()),
        techInitials: "CFM",
        issues: "None",
        resolvedDayOf: true,
        notes: "Umbilical reacts well with program path"
    },
    {
        location: "Tesla",
        date: new Date(Date.now()),
        techInitials: "CFM",
        issues: "None",
        resolvedDayOf: true,
        notes: "Umbilical reacts well with program path"
    }
]

const infoSeed = [
    {
        robotModel: "R2000iC 210F",
        robotApplication: "MH",
        serialNumber: "F238256",
        endUser: "Tesla",
        integrator: "Kuka",
        stationID: "S32 R02",
        system: "LH Doors",
        partDescriptionNumber: "PD30359-01"
    },
    {
        robotModel: "R2000iC 210F",
        robotApplication: "MH",
        serialNumber: "F238257",
        endUser: "Tesla",
        integrator: "Kuka",
        stationID: "S32 R01",
        system: "LH Doors",
        partDescriptionNumber: "PD30359-03"
    }
];

db.Review
  .remove({})
  .then(() => db.Review.collection.insertMany(reviewSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

db.Info
  .remove({})
  .then(() => db.Info.collection.insertMany(infoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

