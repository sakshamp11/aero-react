import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Register.css"
export class Register extends Component {
  render() {
    return (
      <div className='register-body'>
        <div className='headerreg'>
          
        </div>
        <div className='reg-card'>
          <div style={{ position: "absolute", marginTop: "2%" }}>
            <div style={{margin:"1vh",display:"flex"}} >
              <b style={{float:"left"}}> Register Now!</b>
              <div></div>
              <div style={{float:"right"}}>
              
              </div>
            </div>
            <div className='info-reg'>
            <Box
      component="form"
      
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
         
          id="outlined-textarea"
          label="first name"
          defaultValue=""
        />
        <TextField
       
          id="outlined-textarea"
          label="last name"
          defaultValue=""
        />
        
      </div>
      <div>
      <TextField
    
          id="outlined-textarea"
          label="Email"
          defaultValue=""
        />
       <Button variant="contained">Contained</Button>
      </div>
      <div>
      <TextField
          style={{width:"100%"}}
          id="outlined-textarea"
          label="Mobile no."
          defaultValue=""
        />
      </div>
      <div>  
        <TextField
           style={{width:"100%"}}
          id="outlined-textarea"
          label="password"
          defaultValue=""
        />
      </div>
      <div style={{margin:"0.8vh",marginLeft:"1.7vh"}}>
      <Button variant="outlined" style={{width:"100%"}}>Register</Button>
      </div>
    </Box>

            </div>
          </div>
        </div>
      </div>


    )
  }
}

export default Register;