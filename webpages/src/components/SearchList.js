import React, { Component } from 'react'
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./SearchList.css"


export class SearchList extends Component {
  async componentDidMount(){
    let result =await fetch('http://localhost:5000/api/getscrapedtendersdtllist')

    result=await result.json()
    console.log(result)
  }
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
        <div className='sort-container'>
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-2 dropdown-filter">
                <select>
                  <option>
                    Indian Tenders
                  </option>
                </select>
              </div>
              <div class="col-lg-2 dropdown-filter">
                <select>
                  <option>
                    By Keywords
                  </option>
                </select>
              </div>
              <div class="col-lg-2 dropdown-filter">
                <select>
                  <option>
                    By Keywords
                  </option>
                </select>
              </div>
              <div class="col-lg-2 dropdown-filter">
                <select>
                  <option>
                    By Keywords
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='info-box'>
          <div className='info-con'>
            <div className='singlebox'>
              <div class="head-singlebox">
                <table>
                  <tr>
                    <th>Coal and Lignite<hr></hr></th>
                    <th>$20,000<hr></hr></th>
                    

                  </tr>
                  
                  <tr>

                    <td style={{ width: "47%" }}><b>Central government and public sector coal and lignite</b>

                      <p>Mine development and operation(mdo) of piparwar phase-i underground mine for extraction
                        of coal and deliverythereof in accordance with the mining plan through a mineoperator
                        for 14 years......</p></td>
                    <td>
                      <b>Start</b><p>12/10/2021</p>
                    </td>
                    <td>
                      <b>End</b><p>12/10/2021</p>
                    </td>
                    <td>
                      <b>Start</b><p>12/10/2021</p>
                    </td>

                  </tr>
                  <tr>

                  </tr>
                </table>
                <table>
                  <tr>
                    <th>Coal and Lignite</th>
                    <th>$20,000</th>

                  </tr>
                  <tr>

                    <td style={{ width: "47%" }}><b>Central government and public sector coal and lignite</b>

                      <p>Mine development and operation(mdo) of piparwar phase-i underground mine for extraction
                        of coal and deliverythereof in accordance with the mining plan through a mineoperator
                        for 14 years......</p></td>
                    <td>
                      <b>Start</b><p>12/10/2021</p>
                    </td>
                    <td>
                      <b>End</b><p>12/10/2021</p>
                    </td>
                    <td>
                      <b>Start</b><p>12/10/2021</p>
                    </td>

                  </tr>
                  <tr>

                  </tr>
                </table>
                <table>
                  <tr>
                    <th>Coal and Lignite</th>
                    <th>$20,000</th>

                  </tr>
                  <tr>

                    <td style={{ width: "47%" }}><b>Central government and public sector coal and lignite</b>

                      <p>Mine development and operation(mdo) of piparwar phase-i underground mine for extraction
                        of coal and deliverythereof in accordance with the mining plan through a mineoperator
                        for 14 years......</p></td>
                    <td>
                      <b>Start</b><p>12/10/2021</p>
                    </td>
                    <td>
                      <b>End</b><p>12/10/2021</p>
                    </td>
                    <td>
                      <b>Start</b><p>12/10/2021</p>
                    </td>

                  </tr>

                </table>

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
}

export default SearchList












{/* <div className='info-con'>
          <div class="section pt-4">
            <div class="container">
              <div class="row">

                <div class="col-lg-12 mx-auto search-list mb-3">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="heading-4 mb-2">Coal and Lignite</div>
                    </div>
                  </div>
                  <div className='row-info'>
                    <div>
                      <div class="col-lg-6 text-right">
                        <b class="cost">$ 20,000</b>
                      </div>

                      <hr />

                      <div class="col-lg-6 right-border">
                        <b class="sub-heading mb-2">Central government and public sector coal and lignite</b>

                        <p>Mine development and operation(mdo) of piparwar phase-i underground mine for extraction
                          of coal and deliverythereof in accordance with the mining plan through a mineoperator
                          for 14 years......</p>
                      </div>

                      <div class="col-lg-2 right-border">
                        <div><strong>Start</strong></div>
                        <p class="text-center">12/10/2021</p>
                      </div>

                      <div class="col-lg-2 right-border">
                        <div><strong>End</strong></div>
                        <p class="text-center">12/10/2021</p>
                      </div>


                      <div class="col-lg-2">
                        <div><strong>Place</strong></div>
                        <div class="text-center"><i class="fa fa-map-marker"></i> &nbsp; Jharkhand</div>
                        <div class="text-center">
                          <button class="btn btn-primary btn-primary mt-4" type="button"
                            id="button-addon2">View</button></div>
                      </div>


                    </div>

                  </div>
                </div>


              </div>

            </div>
          </div>
        </div> */}