import React, { Component } from 'react'
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import "./SearchList.css"
export class SearchList extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div className='Navb'>
            <div>

            </div>
            <nav class="navbar navbar-expand-lg navbar-light">

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


                  <h4 class="nav-link" href="#">WhyUs</h4>



                  <h4 class="nav-link" href="#">Pricing</h4>


                  <h4 class="nav-link" href="#">Contact</h4>



                  <Button variant="contained" size="small" style={{ marginTop: "1.2vh", height: "70%", marginRight: "0.7vw" }}>
                    Login
                  </Button>



                </div>
              </div>
            </nav>
          </div>

        </div>
        <div className="main">
          <h1>React Search</h1>
          <div className="search">
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search"
            />
          </div>
          
        </div>
      </>
    )
  }
}

export default SearchList