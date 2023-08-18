var express = require('express');
const cors = require('cors');
const { allStudent, single_student, update_student, delete_student, addStudent } = require('../Controller/Studentcontroller');
var router = express.Router();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
router.use(cors(corsOptions));

/* GET home page. */
router.post('/addstudent', addStudent)
router.get('/allstudent', allStudent)
router.get('/singlestudent', single_student)
router.put('/update', update_student)
router.delete('/delete/:id', delete_student)


module.exports = router;
