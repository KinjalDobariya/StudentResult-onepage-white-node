var studentModel = require('../Model/Studentmodel')


exports.addStudent = async (req, res) => {

    try {

        const {
            seat_no, studentname, sub1, sub2, sub3, sub4, sub5
        } = req.body

        var total = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5);
        let pr = total / 500 * 100;
        var min = Math.min(sub1, sub2, sub3, sub4, sub5)
        var max = Math.max(sub1, sub2, sub3, sub4, sub5)
        var grade, result;

        if (pr > 90) {

            grade = "A1";

        }
        else if (pr > 80) {

            grade = "A"

        }
        else if (pr > 60) {

            grade = "B"

        }
        else if (pr > 50) {

            grade = "C"

        }
        else if (pr > 40) {

            grade = "FAIL"

        }

        if (grade === "FAIL") {

            result = "FAIL";
        }
        else {
            result = 'PASS'
        }


        const obj = {
            seat_no:seat_no,
            studentname:studentname,
            sub1:sub1,
            sub2:sub2,
            sub3:sub3,
            sub4:sub4,
            sub5:sub5,
            total:total,
            min:min,
            max:max,
            pr:pr,
            grade:grade,
            result:result
        }

        var data = await studentModel.create(obj)

        res.status(200).json({
            status: "data add successfuly",
            data
        })

    } catch (error) {
        res.status(400).json({
            status: error,
            error: error.message
        })
    }

}

exports.allStudent = async (req, res) => {

    try {

        var data = await studentModel.find();

        res.status(200).json({
            status: "data add successfuly",
            data
        })

    } catch (error) {
        res.status(400).json({
            status: error,
            error: error.message
        })
    }

}

exports.single_student = async (req, res) => {

    try {

        var id = req.query.id
        var data = await studentModel.findById(id);

        res.status(200).json({
            status: "data add successfuly",
            data
        })

    } catch (error) {
        res.status(400).json({
            status: error,
            error: error.message
        })
    }

}

exports.update_student = async (req, res) => {

    try {


        var id = req.body.id

        const {
            seat_no, studentname, sub1, sub2, sub3, sub4, sub5
        } = req.body

        var total = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5);
        let pr = total / 500 * 100;
        var min = Math.min(sub1, sub2, sub3, sub4, sub5)
        var max = Math.max(sub1, sub2, sub3, sub4, sub5)
        var grade, result;

        if (pr > 90) {

            grade = "A1";

        }
        else if (pr > 80) {

            grade = "A"

        }
        else if (pr > 60) {

            grade = "B"

        }
        else if (pr > 50) {

            grade = "C"

        }
        else if (pr > 40) {

            grade = "FAIL"

        }

        if (grade === "FAIL") {

            result = "FAIL";
        }
        else {
            result = 'PASS'
        }


        const obj = {
            seat_no:seat_no,
            studentname:studentname,
            sub1:sub1,
            sub2:sub2,
            sub3:sub3,
            sub4:sub4,
            sub5:sub5,
            total:total,
            min:min,
            max:max,
            pr:pr,
            grade:grade,
            result:result
        }

        var data = await studentModel.findByIdAndUpdate(id, obj, { new: true });
        res.status(200).json({
            status: "data update",
            data
        })

    } catch (error) {
        res.status(400).json({
            status: error,
            error: error.message
        })
    }

}


exports.delete_student = async (req, res) => {

    try {

        var id = req.params.id;
        var data = await studentModel.findByIdAndDelete(id);

        res.status(200).json({
            status: "data delete successfuly",
            data
        })

    } catch (error) {
        res.status(400).json({
            status: error,
            error: error.message
        })
    }

}