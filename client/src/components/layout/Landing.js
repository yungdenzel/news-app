import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
          <img alt='logo' src={process.env.PUBLIC_URL + '/img/logo.png'} />;
            <h4>
            We bring you the latest news ranging from sports,fashion, current news etc
            </h4>
            <p className="flow-text grey-text text-darken-1">
            Login if you are an existing user
            </p>
            <p className="flow-text  text-darken-1">If not a user, we are happy to have you here. Signup and enjoy news on the go</p>
            <div className="col s6">
                <br/>
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable  accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
                <br/>
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;