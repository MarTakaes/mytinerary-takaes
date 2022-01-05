import React from "react";
import {connect} from "react-redux"

function LoggingButton (props){

    function handleClick() {
      console.log('this is:');
    }
      return (
        <button className="btn" onClick ={() => handleClick()}>
         <img id="userimg" src= "../assets/user.png" alt="user img"/>
        </button>
      );
  }
  const mapStateToProps = (state) => {
    return {
      user: state.authReducer.user
    };
  };
 export default connect (mapStateToProps)(LoggingButton)