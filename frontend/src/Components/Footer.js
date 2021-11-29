import Nav from "react-bootstrap/esm/Nav"

function Footermain(){
    return (
        <>
            <Nav className="footer justify-content-center" activeKey="/home">
                <Nav.Link  href="Instagram">
                    <img id="ig" src="./assets/ig.png" alt="ig"/>
                </Nav.Link>
                <Nav.Item>
                 <Nav.Link id="pl" href="#Home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                 <img id="Logo" src="./assets/logo.png" alt="logo"/>
                </Nav.Item>
                <Nav.Item>
                 <Nav.Link id="pl" href="#Cities">Cities</Nav.Link>
                </Nav.Item>
                <Nav.Link  href="Facebook">
                    <img id="fb" src="./assets/fb.png" alt="fb"/>  
                </Nav.Link>
                </Nav>
        </>
    )
}
export default Footermain