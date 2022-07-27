import React, { Component, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import "./Navbar.css"
let logincardFlag = true;
// function logincard(props){
//     return{

//     }


// }
const renderErrorMessage = (name) => {

}


const renderForm = () => {
    return (
        <div className="form" >
            
            <form className='formWrapper'>
                <div className="input-container">
                    <div className='wrapperLogin'>
                        
                        <Box className='Login-inp'

                        >   <div style={{fontStyle:"font-family: 'Helvetica', 'Arial', sans-serif",textDecoration: "underline",
                        textDecorationColor: "blue"}}><b>Login to your account</b></div>
                            <div className='inpar'><TextField fullWidth label="Mobile No. or Email" id="Mobile No. or Email" /></div>
                            <div className='inpar'><TextField fullWidth label="Password" id="Password" /></div>

                            <br></br>

                        </Box>




                    </div>
                </div>
                <div className='middle'>
                <Button  style={{marginLeft:"35%",marginBottom:"3%",height:"100%"}} variant="contained" size="large">
                    Login
                </Button>
                <div>forgot password?</div>
                </div>
                <div className='creatacc'>
                   <div style={{marginLeft:"35%"}}>
                   Create an  account 
                   </div>
                </div>

            </form>
        </div>
    )
}
export class Navbar extends Component {

    constructor() {
        super();
        this.state = {

            errorMessages: [],
            isSubmitted: false
        };
    }
    render() {
        return (
            <>
            <div className="whole-wrapper">

                <div class="header">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 company-logo">
                                <img src="images/logo.png"></img>

                            </div>
                            <div class="col-lg-8 menu">
                                <nav class="navbar navbar-expand-lg navbar-light ">

                                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>

                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div class="nav-list">


                                            <h4 class="nav-link" >Home</h4>



                                            <h4 class="nav-link" href="#">About us</h4>



                                            <h4 class="nav-link" href="#">Services</h4>


                                            <h4 class="nav-link" href="#">Why Us</h4>



                                            <h4 class="nav-link" href="#">Pricing</h4>


                                            <h4 class="nav-link" href="#">Contact</h4>


                                            <div className='LoginNav' >
                                                <Button variant="contained" size="small">
                                                    Login
                                                </Button>
                                            </div>


                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bodyPage'>

                    <div className='org'>
                       <div className='info-org-slogan'>
                       SEARCH MY 
                       <br></br>
                       TENDER PLEASE
                       </div>
                       <br></br>
                       <div className='info-org-desc'>
                       Your one stop solution for a seamless,optimized
                    <br></br>
                    and automated tender searching experience
                       </div>

                    </div>
                    
                    <div className='card-con'>
                        {(logincardFlag) ? renderForm() : <div ></div>}
                    </div>

                </div>


            </div>
            <div style={{backgroundColor:"whitesmoke"}}></div>
            </>
        )
    }
}



export default Navbar