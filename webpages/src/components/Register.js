import React, { Component, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Register.css"
import{Link} from 'react-router-dom'
function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mb, setMb] = useState("");




//   function validate(method) {
//     check("Fname")
//         .not()
//         .isEmpty()
//         .withMessage("First Name field required")
//         .trim()
//         .isLength({ max: 100 })
//         .withMessage("Maximum character size 100 only")
//         //.matches(/^[A-Za-z0-9 .,'!&]+$/)
//         .matches(/^([a-zA-Z ]){2,30}$/)
//         .withMessage("First Name is not valid"),
//         check("Lname")
//             .not()
//             .isEmpty()
//             .withMessage("Last Name field required")
//             .trim()
//             .isLength({ max: 100 })
//             .withMessage("Maximum character size 100 only")
//             //.matches(/^[A-Za-z0-9 .,'!&]+$/)
//             .matches(/^([a-zA-Z ]){2,30}$/)
//             .withMessage("Last Name is not valid"),
//         check("Email")
//             .not()
//             .isEmpty()
//             .trim()
//             .withMessage("E-mail field required")
//             .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
//             .withMessage("E-mail is not valid"),
//         check("MobileNo")
//             .not()
//             .isEmpty()
//             .withMessage("Mobile Number field required")
//             .trim()
//             .isLength({ max: 10 })
//             .withMessage("Maximum Number size 10 only")
//             .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/)
//             .withMessage("Mobile Number is not valid")
// }

  async function f() {

    // setEmail("sps@gmail.com");
    // setPassword("Suraj@1234");
    // console.log(Email,Password)

    // // let item={Email,Password}
    // console.log(item);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        Email: email,
        Fname: fname,
        Lname: lname,
        MobileNo: mb,
        Password: password,
        PasswordConf: password


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
    let result = await fetch('http://localhost:5000/api/register', requestOptions)

    result = await result.json()
    console.log(result)
  }
  return (
    <>
      <div class="container" style={{backgroundColor:" #4682B4"}}>
        <div className='Navb' style={{backgroundColor:" #4682B4"}}>
          <div>

          </div>
          <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:" #4682B4",width:"100%"}}>

            

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="nav-list">


                <h4 class="nav-link" >Home</h4>



                <h4 class="nav-link" href="#">About us</h4>



                <h4 class="nav-link" href="#">Services</h4>


                <h4 class="nav-link" href="#">WhyUs</h4>



                <h4 class="nav-link" href="#">Pricing</h4>


                <h4 class="nav-link" href="#">Contact</h4>



                <Link to='/login'>
                                    <Button variant="contained" size="small" style={{ marginTop: "1.2vh", height: "70%", marginRight: "0.7vw" }}>
                                        Login
                                    </Button>
                                    </Link>



              </div>
            </div>
          </nav>
        </div>

      </div>
      <div style={{height:"10vh",backgroundColor:"#4682B4",width:"100vw"}}>
      </div>  

      <div className='register-body' >
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
                    style={{ padding: "1vh" }}
                    onChange={(e) => setFname(e.target.value)}
                  />
                  <TextField

                    id="outlined-textarea"
                    label="last name"
                    defaultValue=""
                    style={{ padding: "1vh" }}
                    onChange={(e) => setLname(e.target.value)}
                  />

                </div>
                <div>
                  <TextField

                    id="outlined-textarea"
                    label="Email"
                    defaultValue=""
                    style={{ padding: "1vh" }}
                    onChange={(e) => setEmail(e.target.value)}

                  />
                  <Button variant="contained">Contained</Button>
                </div>
                <div>
                  <TextField
                    style={{ width: "100%", padding: "1vh" }}
                    id="outlined-textarea"
                    label="Mobile no."
                    defaultValue=""

                    onChange={(e) => setMb(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    type="password"
                    style={{ width: "100%", padding: "1vh" }}
                    id="outlined-textarea"
                    label="password"
                    defaultValue=""

                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div style={{ margin: "0.8vh", marginLeft: "1.7vh" }}>
                  <Button variant="outlined" style={{ width: "100%", padding: "2vh",marginTop:"6vh" }} onClick={f}  >Register</Button>
                </div>
              </Box>

            </div>
          </div>
        </div>
      </div>
      <footer class="footer-bs">
                <div class="row">
                    <div class="col-md-3 footer-brand animated fadeInLeft">
                        <h2>Logo</h2>
                        <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies. Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque ex mi ut sem.</p>
                        <p>© 2014 BS3 UI Kit, All rights reserved</p>
                    </div>
                    <div class="col-md-4 footer-nav animated fadeInUp">
                        <h4>Menu —</h4>
                        <div class="col-md-6">
                            <ul class="pages">
                                <li><a href="#">Travel</a></li>
                                <li><a href="#">Nature</a></li>
                                <li><a href="#">Explores</a></li>
                                <li><a href="#">Science</a></li>
                                <li><a href="#">Advice</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 footer-social animated fadeInDown">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">RSS</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 footer-ns animated fadeInRight">
                        <h4>Newsletter</h4>
                        <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                        <p>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search for..."></input>
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-envelope"></span></button>
                                </span>
                            </div>
                        </p>
                    </div>
                </div>
            </footer>
            
    </>


  )
}

export default Register;