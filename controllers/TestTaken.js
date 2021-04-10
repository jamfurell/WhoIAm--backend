const db = require("../models");
const index = (req, res) => {
        db.TestTaken.find({}, (err, foundTestTakens) => {
            if (err) {
            console.log("Error in TestTakens#index:", err);
            return res.status(500).json({ message: "Error. Please try again." });
            }
            if (!foundTestTakens.length) {
            return res.status(200).json({ message: "No TestTakens Found in database." });
            }
            res.status(200).json({ TestTakens: foundTestTakens });
        });
        };
        const show = (req, res) => {
        db.TestTaken.findById(req.params.id, (err, foundTestTaken) => {
            if (err) console.log("Error in TestTakens#show:", err);
            if (!foundTestTaken) {
            return res
                .status(200)
                .json({ message: "TestTaken with provided ID is not found." });
            }
            res.status(200).json({ TestTaken: foundTestTaken });
        });
        };
        const create = (req, res) => {
            console.log(req.body, "<====req.body")
        db.TestTaken.create(req.body, (err, savedTestTaken) => {
            if (err) console.log("Error in TestTakens#create:", err);
            res.status(201).json({ TestTaken: savedTestTaken });
        });
        };
        const update = (req, res) => {
            db.TestTaken.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true },
                (err, updatedTestTaken) => {
                if (err) console.log("Error in TestTaken#update:", err);
                if (!updatedTestTaken) {
                    return res.status(200).json({
                    message: "TestTaken with provided ID could not be found for update.",
                    });
                }
                res.status(200).json({ TestTaken: updatedTestTaken });
                }
            );
        };
        
        module.exports = {
        index,
        show,
        create,
        update,
    };