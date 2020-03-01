import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";




class Navbar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
    
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col brand-logo  black-text">
                          Parrot News
            </Link>
           
            <button style={{borderRadius: "3px", letterSpacing: "1.5px",
               marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn fr mr4 waves-effect waves-light hoverable  text-dark accent-3" >
              Logout
            </button>
            
          </div>
        </nav>        
      </div>
    );
  }
}
const mapStateToProps = state => ({
    auth: state.auth
  });
  
export default connect(
    mapStateToProps,
    { logoutUser }
  )(Navbar);