import React from "react";
import {useState} from "react"
import Button from "react-bootstrap/Button"
import Offcanvas from "react-bootstrap/Offcanvas"
import LoggingButton from "./Userimage";


function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function Example() {
        return (
          <>
            {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
              <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
          </>
        );
      }
      
  
    return (
      <>
        <Button  onClick={handleShow} className="me-2">
          <LoggingButton/>
        </Button>
        <Offcanvas id="off" show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="offt">Welcome</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offb">
              <div>
                <Button href="/signin" variant="outline-dark">
                  Sign In
                </Button>
              </div>
              <div>
                <Button href="/signup" variant="outline-dark">
                  Sign Up
                </Button>
              </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  

  export default OffCanvasExample