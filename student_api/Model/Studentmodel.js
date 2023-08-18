const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({

    seat_no: {
        type: Number,
        required:true,
    },

    studentname: {
        type: String,
        required:true,
        // validate(value) {
        //     if (validator.isEmpty(value)) {
        //         throw new Error("Enter student name");
        //     }
        // }
    },

    sub1: {
        type: Number,
        required:true,
    },
    sub2: {
        type: Number,
        required:true,
    },
    sub3: {
        type: Number,
        required:true,
    },
    sub4: {
        type: Number,
        required:true,
    },
    sub5: {
        type: Number,
        required:true,
    },
    total: {
        type: Number,
        required:true,
    },
    pr: {
        type: Number,
        required:true,
    },
    min: {
        type: Number,
        required:true,
    },
    max: {
        type: Number,
        required:true,
    },
    grade: {
        type: String,
        required:true,
    },
    result: {
        type: String,
        required:true,
    }

});


const studentModel = mongoose.model('student', studentSchema);

module.exports = studentModel;
