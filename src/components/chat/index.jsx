import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get_users } from '../../store/action'

import logo from '../../images/OLX-logo.png'
import image from '../../images/phone-app.png'
import image1 from '../../images/640px-Google_Play_Store_badge_EN.svg.png'
import image2 from '../../images/1_POlwgD8liUYUqiEU6IU1Pw.png'
import '../../App.css';
import image3 from '../../images/bike.jpg'
import { Link } from 'react-router-dom'
import image5 from '../../images/bg-up.jpg'



class chat extends Component {
  render() {
    let user = this.props.current_user
    console.log("user----", this.props.users)

    return (
      <div>
        {/* <h1>welcome  {user.name}</h1>
                <img src={user.profile} width="80px" alt=""/>
               <h3>Uid: {user.uid}</h3> */}

        <div className="header">
          <div className="container-fluid">
            <div className="ttt">
              <div className="row">
                <div className="col-lg-8 location-search-input">
                  <img src={logo} width="50px" alt="" />
                  <input className="location-input" type="text" placeholder="location" />
                  <input className="location-input-2" type="text" placeholder="location" />
                </div>
                <div className="col-lg-4 after-login-icon">
                  <span><i className="fa fa-comment-o messanger-icon" aria-hidden="true" />
                  </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span><i className="fa fa-bell-o notification-icon" aria-hidden="true" />
                  </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>


                    <span class="dropdown">
                      <button class="dropbtn"><img src={user.profile} className="profile-photo" alt="" /></button>
                      <div class="dropdown-content">
                        <a href="#"><h5>Hello!</h5> {user.name}</a>
                      </div>
                    </span>


                  </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/Sell"><span className="sell-style">&nbsp; <i className="fa fa-plus" aria-hidden="true" />&nbsp;
                    Sell &nbsp;</span></Link>


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
            <img src={image5} alt="" srcset="" />
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
                    <img src={image} alt="" srcSet />
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
                    <img src={image2} width="130px" />
                    <img src={image1} width="137px" alt="" />
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
                      <img src={image1} width="80px" />
                      <img src={image2} width="73px" />
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
  current_user: state.current_user,
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  get_users: (history) => dispatch(get_users(history))

})

export default connect(mapStateToProps, mapDispatchToProps)(chat);