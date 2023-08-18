// import React from 'react'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Container, Grid } from '@mui/material';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Resulte() {

    var obj = {
        seat_no: "",
        studentname: "",
        sub1: "",
        sub2: "",
        sub3: "",
        sub4: "",
        sub5: "",

    }

    var [val, setval] = useState(obj);
    var [Arr, setArr] = useState([]);
    var [isUpdate, setIsupdate] = useState(false);



    const handleClick = () => {

        if (isUpdate) {
            axios.put(`http://localhost:5000/update`, {
                id: val._id,
                seat_no: val.seat_no,
                studentname: val.studentname,
                sub1: val.sub1,
                sub2: val.sub2,
                sub3: val.sub3,
                sub4: val.sub4,
                sub5: val.sub5,
            })
                .then(function (response) {
                    console.log(response.data.data);

                    if (response.data.status === "data update") {
                        setval(obj);
                    }
                    setIsupdate(false)
                    resultData();

                })
                .catch(function (error) {
                    console.log(error);
                })

        } else {

            axios.post('http://localhost:5000/addstudent', {
                seat_no: val.seat_no,
                studentname: val.studentname,
                sub1: val.sub1,
                sub2: val.sub2,
                sub3: val.sub3,
                sub4: val.sub4,
                sub5: val.sub5,
            })
                .then(function (response) {
                    console.log(response);
                    resultData();
                    setval(obj);
                })
                .catch(function (error) {
                    console.log(error);
                })

        }

    }

    const handleChange = (e) => {
        setval({ ...val, [e.target.name]: e.target.value })

    }

    const resultData = () => {
        axios.get('http://localhost:5000/allstudent')
            .then(function (response) {
                setArr(response.data.data);
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        resultData();
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/delete/${id}`)
            .then(function (response) {
                // handle success
                console.log(response);
                resultData();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    const handleupdate = (id) => {
        axios.get(`http://localhost:5000/singlestudent?id=${id}`)
            .then(function (response) {
                console.log(response.data.data);
                setval(response.data.data)
                setIsupdate(true)

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <Container className='container'>
                <Grid className="box">
                    <Grid container>
                        <Grid item xs={12}>
                            <h1>Student-Result</h1>
                            <hr />
                        </Grid>
                    </Grid>
                    <Form>
                        <Grid container spacing={2} >
                            <Grid item xs={12}>
                                <TextField id="outlined-password-input" label="Seat-Number" name='seat_no' type="number" autoComplete="current-password" onChange={handleChange} value={val.seat_no} sx={{ width: '20%' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-password-input" label="Student-Name" name='studentname' type="text" autoComplete="current-password" onChange={handleChange} value={val.studentname} sx={{ width: '60%' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-password-input" label="Account" name='sub1' type="number" autoComplete="current-password" onChange={handleChange} value={val.sub1} sx={{ width: '60%' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-password-input" label="Statistic" name='sub2' type="number" autoComplete="current-password" onChange={handleChange} value={val.sub2} sx={{ width: '60%' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-password-input" label="Economic" name='sub3' type="number" autoComplete="current-password" onChange={handleChange} value={val.sub3} sx={{ width: '60%' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-password-input" label="Gujarati" name='sub4' type="number" autoComplete="current-password" onChange={handleChange} value={val.sub4} sx={{ width: '60%' }} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-password-input" label="English" name='sub5' type="number" autoComplete="current-password" onChange={handleChange} value={val.sub5} sx={{ width: '60%' }} />
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xs={2}>
                                <Button variant="contained" size="large" onClick={handleClick} sx={{ background: "#196ae5" }}>Submit</Button>
                            </Grid>
                        </Grid>
                    </Form>
                    <Grid sx={{ marginTop: "50px" }}>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ background: "#196ae5" }}>
                                    <TableRow>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Seat_No</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Studentname</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Account</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Statistics</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Economic</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Gujarati </TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>English</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Min</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Max</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Total</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Percentage</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Grade</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Result</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Update</TableCell>
                                        <TableCell sx={{ color: '#fff', fontSize: "17px" }}>Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Arr.map((item) => (
                                        <TableRow>
                                            <TableCell sx={{ textAlign: "center" }}>{item.seat_no}{'.'}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.studentname}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.sub1}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.sub2}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.sub3}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.sub4}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.sub5}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.min}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.max}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.total}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.pr}{'%'}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.grade}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{item.result}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>
                                                <UpdateIcon color="primary" onClick={() => handleupdate(item._id)} />
                                            </TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>
                                                <DeleteIcon color="primary" onClick={() => handleDelete(item._id)} />
                                            </TableCell>
                                        </TableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>



        </div>
    )
}

export default Resulte
