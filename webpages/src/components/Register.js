import React, { Component, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Register.css"
function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mb, setMb] = useState("");



 

  async function f(){
        
    // setEmail("sps@gmail.com");
    // setPassword("Suraj@1234");
    // console.log(Email,Password)
    
    // // let item={Email,Password}
    // console.log(item);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
        Email: {email},
        Fname: {fname},
        Lname: {lname},
        MobileNo: {mb},
        Password: {password},
        PasswordConf: {password}
        
        
        })
    };
    // let result=await  fetch('http://localhost:5000/api/login',{
    //     method:'POST',
    //     headers: {
    //         'Accept': 'application/json'
    //     },
    //     mode:'cors',
    //     body:JSON.stringify(item)
        
    // }
    let result =await fetch('http://localhost:5000/api/register', requestOptions)

    result=await result.json()
    console.log(result)
}
  return (
    <div className='register-body'>Register
      <div className='reg-card'>
        <div style={{ position: "absolute", marginTop: "2rem" }}>
          <div style={{ margin: "1vh", display: "flex" }} >
            <b style={{ float: "left" }}> Register Now!</b>
            <div></div>
            <div style={{ float: "right" }}>

            </div>
          </div>
          <div className='info-reg'>
            <Box
              
            >
              <div>
                <TextField

                  id="outlined-textarea"
                  label="first name"
                  defaultValue=""
                  onChange={(e) => setFname(e.target.value)}
                />
                <TextField

                  id="outlined-textarea"
                  label="last name"
                  defaultValue=""
                  onChange={(e) => setLname(e.target.value)}
                />

              </div>
              <div>
                <TextField

                  id="outlined-textarea"
                  label="Email"
                  defaultValue=""
                  onChange={(e) => setEmail(e.target.value)}

                />
                <Button variant="contained">Contained</Button>
              </div>
              <div>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-textarea"
                  label="Mobile no."
                  defaultValue=""
                  onChange={(e) => setMb(e.target.value)}
                />
              </div>
              <div>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-textarea"
                  label="password"
                  defaultValue=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div style={{ margin: "0.8vh", marginLeft: "1.7vh" }}>
                <Button variant="outlined" style={{ width: "100%" }} onClick={f}  >Register</Button>
              </div>
            </Box>

          </div>
        </div>
      </div>
    </div>


  )
}

export default Register;