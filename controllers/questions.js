const db = require ('../models')

const index = (req, res) => {
    db.Question.find({}, (err, foundQuestions) =>{
        if (err){
            console.log("Error in questions-index : ", err );
            return res.status(500).json({message: "Error. Please try again."})
        }
        if (!foundQuestions.length){
            return res.status(200).json({message: "No Question found in database."})
        }
        res.status(200).json({questions: foundQuestions});
    });
};

const show = (req, res) => {
    db.Question.findById(req.params.id, (err, foundQuestions) => {
        if (err) console.log("Error in questions-show:", err);
        if (!foundQuestions) {
        return res
            .status(200)
            .json({ message: "Question with provided ID is not found." });
        }
        res.status(200).json({ game: foundQuestions });
    });
};

module.exports={
    index,
    show,
}