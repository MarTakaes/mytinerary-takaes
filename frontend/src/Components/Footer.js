import Nav from "react-bootstrap/esm/Nav";

function Footermain() {
  return (
    <>
      <Nav className="footer " activeKey="/home">
        <div id="spaceLeft">
          <Nav.Item> Contact:</Nav.Item>
          <div>
            <Nav.Item> ✆ 011 4976-3658</Nav.Item>
            <Nav.Item> 📍Av. Santa Fe 1123, Bs As, Argentina </Nav.Item>
          </div>
        </div>
        <div className="d-flex align-items-center spaceCenter">
          <Nav.Item>
            <Nav.Link id="pl" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <img key="ok" className="logo" src="../assets/logo.png" alt="logo" />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id="pl" href="/Cities">
              Cities
            </Nav.Link>
          </Nav.Item>
        </div>
        <div id="spaceRight">
          <Nav.Link href="Facebook">
            <img id="fb" src="../assets/fb.png" alt="fb" />
          </Nav.Link>
          <Nav.Link href="Instagram">
            <img id="ig" src="../assets/ig.png" alt="ig" />
          </Nav.Link>
        </div>
      </Nav>
    </>
  );
}
export default Footermain;
