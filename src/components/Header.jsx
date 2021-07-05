import React, { Component } from 'react';
import logo from '../images/OLX-logo.png'
import { connect } from 'react-redux'
import { facebook_login } from '../store/action'
import image from '../images/phone-app.png'
import image1 from '../images/640px-Google_Play_Store_badge_EN.svg.png'
import image2 from '../images/1_POlwgD8liUYUqiEU6IU1Pw.png'
import '../App.css';
import image3 from '../images/bike.jpg'
import image5 from '../images/bg-up.jpg'






class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="ttt">
              <div className="row">
                <div className="col-lg-10">
                  <span className="col-sm-6">
                    <img src={logo} width="70px" alt="olx clone" />
                  </span>
                  <input className="location-input" type="text" placeholder="Pakistan" />

                  <input className="location-input-2" type="text" placeholder="Find Cars, Mobile Phone and more...." />

                </div>
                <div className="col-lg-2 col-sm-6">
                  <span className="btn btn-primary" onClick={() => this.props.facebook_login(this.props.history)}>Login</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {/* <span className="btn btn-secondary">Sell</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="categories">
          <div className="container">
            <div className="row">
              <select className="categories-dropdown" id="cars" name="carlist" form="carform">
                <option value="All categories">All categories</option>
                <option value="Car">Car</option>
                <option value="Bikes">Bikes</option>
                <option value="Electronics">Electronics</option>
                <option value="Electronics">Mobile phones</option>
                <option value="Electronics">Motorcycles</option>
                <option value="Electronics">Houses</option>
                <option value="Electronics">TV-video-audio</option>
                <option value="Electronics">Tablets</option>
                <option value="Electronics">Land &amp; Plots</option>
              </select>
              <div className="categories-line">
                <a href="#">Mobile phones</a>
                <a href="#">Cars</a>
                <a href="#">Motorcycles</a>
                <a href="#">Houses</a>
                <a href="#">TV-video-audio</a>
                <a href="#">Tablets</a>
                <a href="#">Land &amp; plots</a>
              </div>
            </div>
          </div>
        </div>



        <div>
          <div className="navbar-sa-necha">
            <img src={image5} alt="olx-clone" srcset="" />
          </div>
          {/* _______________________ */}
          <div className="container-fluid">
            <div className="back-cover">
              <div className="sections-box">
                <div className="for-based">
                  <span>Based on your last search</span>
                  <a type="button" className="view-more">
                    <span>View more</span>
                  </a>
                </div>
                <center>
                  <div className="services">
                    <div className="container-fluid ">
                      <div className="row ">
                        <div className="col-lg-3 ">
                          <div className="thumbnail">
                            <div className="services-box ">
                              <label>
                                <span className="feature">
                                  featured
                                </span>
                              </label>
                              <img src={image3} className="img-fluid" alt="lcd repair service " />
                              <h4>RS: 32,000</h4>
                              <span className="vl" />
                              <p>Our hey can replaceion.....</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 ">
                          <div className="thumbnail">
                            <div className="services-box ">
                              <label>
                                <span className="feature">
                                  featured
                                </span>
                              </label>
                              <img src={image3} className="img-fluid" alt="flat screen repair " />
                              <h4>RS: 32,000</h4>
                              <span className="vl" />
                              <p>Our hey can replaceion.....</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 ">
                          <div className="thumbnail">
                            <div className="services-box ">
                              <label>
                                <span className="feature">
                                  featured
                                </span>
                              </label>
                              <img src={image3} className="img-fluid" alt="tv repair in karachi " />
                              <h4>RS: 32,000</h4>
                              <span className="vl" />
                              <p>Our hey can replaceion.....</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 ">
                          <div className="thumbnail">
                            <div className="services-box ">
                              <label>
                                <span className="feature">
                                  featured
                                </span>
                              </label>
                              <img src={image3} className="img-fluid" alt="tv repair in karachi " />
                              <h4>
                                RS: 32,000</h4>
                              <span className="vl" />
                              <p>Our hey can replaceion.....</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
          {/* _________________________ */}
          <center>
            <div className="services">
              <div className="container-fluid ">
                <div className="row ">
                  <div className="col-lg-3 ">
                    <div className="thumbnail">
                      <div className="services-box ">
                        <label>
                          <span className="feature">
                            featured
                          </span>
                        </label>
                        <img src={image3} className="img-fluid" alt="lcd repair service " />
                        <h4>RS: 32,000</h4>
                        <span className="vl" />
                        <p>Our hey can replaceion.....</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 ">
                    <div className="thumbnail">
                      <div className="services-box ">
                        <label>
                          <span className="feature">
                            featured
                          </span>
                        </label>
                        <img src={image3} className="img-fluid" alt="flat screen repair " />
                        <h4>RS: 32,000</h4>
                        <span className="vl" />
                        <p>Our hey can replaceion.....</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 ">
                    <div className="thumbnail">
                      <div className="services-box ">
                        <label>
                          <span className="feature">
                            featured
                          </span>
                        </label>
                        <img src={image3} className="img-fluid" alt="tv repair in karachi " />
                        <h4>RS: 32,000</h4>
                        <span className="vl" />
                        <p>Our hey can replaceion.....</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 ">
                    <div className="thumbnail">
                      <div className="services-box ">
                        <label>
                          <span className="feature">
                            featured
                          </span>
                        </label>
                        <img src={image3} className="img-fluid" alt="tv repair in karachi " />
                        <h4>
                          RS: 32,000</h4>
                        <span className="vl" />
                        <p>Our hey can replaceion.....</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </center>
          <br /><br /><br /><br /><br /><br />
          {/* -----------FOOTER SECTION---------- */}
          <div className="bg-light">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4">
                  <div>
                    <img src={image} alt="olx-clone" srcSet />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="try-the-olx-app">
                    <h3>try the olx app</h3>
                    <p>Buy, sell and find just about anything using the app on your mobile.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="vla" />
                  <div className="get-your-app-today">
                    <p>get your app today</p>
                    <img src={image2} width="130px" alt="clone-olx"/>
                    <img src={image1} width="137px" alt="clone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="footer">
              <div className="back-cover">
                <div className="container-fluid">
                  <div className="row ten-columns">
                    <div className="col-sm-2">
                      <div className="heading">
                        POPULAR CATEGORIES
                      </div>
                      <div className="links">
                        Cars <br /> Flats for rent <br /> Jobs <br /> Mobile Phones
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="heading">
                        TRENDING SEARCHES
                      </div>
                      <div className="links">
                        Bikes <br /> Watches <br /> Books<br /> Dogs
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="heading">
                        ABOUT US
                      </div>
                      <div className="links">
                        About Olx Group <br /> Olx Blog <br /> Contact Us <br /> Olx for Bussiness
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="heading">
                        OLX
                      </div>
                      <div className="links">
                        Help <br /> Sitemap <br />Legal &amp; Privacy protection
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="heading">
                        FOLLOW US
                      </div>
                      <div className="links">
                        <i className="fa fa-facebook" />
                        <i className="fa fa-twitter" style={{ paddingLeft: '15px' }} />
                        <i className="fa fa-youtube-play" style={{ paddingLeft: '15px' }} />
                        <i className="fa fa-instagram" style={{ paddingLeft: '15px' }} />
                      </div>
                      <br />
                      <img src={image1} width="80px" alt="olx clone"/>
                      <img src={image2} width="73px" alt="olx clone" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 first">
                    <span>Other Countries </span> &nbsp; &nbsp;
                    <a href="#">india -</a>
                    <a href="#">South Africa -</a>
                    <a href="#">indonesia</a>
                  </div>
                  <div className="col-lg-6 last">
                    <span>Free Classifieds in Pakistan  . © 2006-2020 OLX</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>


      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  name: "ameen"
})

const mapDispatchToProps = (dispatch) => ({
  facebook_login: (history) => dispatch(facebook_login(history)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);