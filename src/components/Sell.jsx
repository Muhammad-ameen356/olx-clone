import React, { Component } from 'react';
import logo from '../images/OLX-logo.png'
import {Link} from 'react-router-dom'





class Sell extends Component {
    render(){
     
        return(
            <div>
                <div className="back-colour">
  <center>
    <div className="form-up">
      <img className="image-sell" src={logo} alt="" />
      <h4 style={{textDecoration: 'underline'}}>Fill Up The Form &amp; Now Sell Your Items </h4>
    </div>
  </center>
  <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Item Name</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Item Name" />
        <small id="emailHelp">We'll never share your email with anyone else.</small>
      </div>
      <span className="form-group col-md-4">
        <label htmlFor="inputState">Item categories</label>
        <select id="inputState" className="form-control">
          <option selected>Choose a Category</option>
          <option>Mobile Phones </option>
          <option>Vechiles </option>
          <option>Property For Sale </option>
          <option>Property For Rent</option>
          <option>Electronics &amp; Home Appliances </option>
          <option>Bikes </option>
          <option>Bussiness, industrial &amp; Agriculture </option>
          <option>Services </option>
          <option>Jobs</option>
          <option>Animals </option>
        </select>
      </span>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Item Price</label>
        <input type="number" className="form-control" id="exampleInputPassword2" placeholder="Item Price" required />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Upload Image</label>
        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
      </div>
    </form>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Locations</label>
      <input type="Text" className="form-control" id="exampleInputPassword4" placeholder="Locations" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Item Description</label>
      <input type="text" className="form-control" id="exampleInputPassword5" placeholder="Item Description" />
    </div>
    <center>
      <div className="buttons">
      <Link to="/chat">  <button type="back" className="btn btn-danger">Cancle</button> </Link>
      <Link to="/chat"> <button type="submit" className="btn btn-success"> Submit </button></Link>
      </div>
    </center>
    <br /><br /><br />
  </div>
</div>

            </div>
            )
        }
    }
export default Sell;    