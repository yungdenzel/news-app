import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import News from "./News";
import Navbar from "../layout/Navbar";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render(){
    const { user } = this.props.auth;

    return (
        <div>
            <Navbar />
            
      <div>
      <h5>Hello, {user.name.split(" ")[0]}</h5>
             
        <div className="row">
    
            {/* <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
             
            </h4> */}
            <News />
           
          </div>
        </div>
      </div>
      
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);