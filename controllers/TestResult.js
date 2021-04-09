const db = require("../models");
const index = (req, res) => {
        db.TestResult.find({}, (err, foundTestResults) => {
            if (err) {
            console.log("Error in TestResults#index:", err);
            return res.status(500).json({ message: "Error. Please try again." });
            }
            if (!foundTestResults.length) {
            return res.status(200).json({ message: "No TestResults Found in database." });
            }
            res.status(200).json({ TestResults: foundTestResults });
        });
        };
        const show = (req, res) => {
        db.TestResult.findById(req.params.id, (err, foundTestResult) => {
            if (err) console.log("Error in TestResults#show:", err);
            if (!foundTestResult) {
            return res
                .status(200)
                .json({ message: "TestResult with provided ID is not found." });
            }
            res.status(200).json({ TestResult: foundTestResult });
        });
        };
        const create = (req, res) => {
        db.TestResult.create(req.body, (err, savedTestResult) => {
            if (err) console.log("Error in TestResults#create:", err);
            res.status(201).json({ TestResult: savedTestResult });
        });
        };
        
        module.exports = {
        index,
        show,
        create,
    };