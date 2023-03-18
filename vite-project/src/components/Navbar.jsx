
function NavbarComponent() {
    return (
        <div  className="container">
            <div className="row align-items-start">
            <div className="col">
                Logo
            </div>
            <div className="col">
                <a href="#home">Features</a>
            </div>
            <div className="col">
                <a href="#link">Team</a>
            </div>
            <div className="col">
                <a href="#">Sign In</a>
            </div>
            </div>
        </div>
    //   <Navbar style={{backgroundColor: '#181f2a', color: "white"}} fixed="top">
    //     <Container fluid>
    //       <Navbar.Brand href="#home"></Navbar.Brand>
    //       <Navbar.Toggle />
    //       <Navbar.Collapse className="justify-content-end">
    //         <Nav.Link href="#home">Features</Nav.Link>
    //         <Nav.Link href="#link">Team</Nav.Link>
    //         <Nav.Link href="#link">Sign In</Nav.Link>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    );
  }
  
  export default NavbarComponent;
