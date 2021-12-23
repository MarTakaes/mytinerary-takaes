import React from "react";
import {connect} from "react-redux"

function LoggingButton (props){

    function handleClick() {
      console.log('this is:');
    }
      return (
        <button className="btn" onClick ={() => handleClick()}>
          {props.user ? <img width="25rem" src={props.user.photo} alt={props.user.name}/> : <img id="userimg" src= "../assets/user.png" alt="user img"/>}
        </button>
      );
  }
  const mapStateToProps = (state) => {
    return {
      user: state.authReducer.user
    };
  };
 export default connect (mapStateToProps)(LoggingButton)