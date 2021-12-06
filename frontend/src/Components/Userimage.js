import React from "react";


class LoggingButton extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
    render() {

      return (
        <button className="btn" onClick ={() => this.handleClick()}>
          <img id="userimg" src= "../assets/user.png" alt="user img"/>
        </button>
      );
    }
  }

 export default LoggingButton