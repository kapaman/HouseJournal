import React from "react";
// import Button from 'react-bootstrap/Button';
// import { NavLink } from "react-router-dom";
// import { Nav,Container } from "react-bootstrap";
// import { NavDropdown,Nav,Navbar,NavbarBrand,NavLink,NavItem,Container } from "react-bootstrap";
import {
  Link,
} from "react-router-dom";
// import styled from "styled-components";

const styles={
  bars:{
    color:'white',
    display:'none',
  }

}

// const NavItem = (item) => {
//   if (item.to != "none")
//     return (
//       <Link
//         style={{
//           margin: "10px",
//         }}
//         to={`${item.to.toLowerCase()}`}>
//         {" "}
//         {item.title}{" "}
//       </Link>
//     );
//   else
//     return (
//       <button onClick={() => item.setShow(!item.show)}
//         style={{
//           margin: "10px",
//         }}>
//         {" "}
//         {item.title}{" "}
//       </button>
//     );
// };
const NavBar = (props) => {
  //console.log(props);

  return (
    <div className="navbar" style={{ zIndex: '10', position: 'fixed', width: '100%', top: '0', display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgb(54, 76, 255)', margin: 0 }}>
      <div className="brand" style={{ marginLeft: '20px', padding: '0 20px', color: 'white', fontSize: '18px' }}>
        <p style={{ fontFamily: 'Poppins', fontWeight: '700', filter: "drop-shadow(1.975px 1.975px 0px #000000)" }}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>WhatsGood</Link></p>
      </div>
      <div className="right" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={e => this.handleToggle(e)}
            style={styles.bars}
          />
        <div className="properties" style={{ padding: '0 20px' }}>
          <p style={{ fontSize: '14px', fontFamily: 'Poppins', backgroundColor: 'white', padding: '2.5px 20px', borderRadius: '8px', filter: 'drop-shadow(3.375px 3.375px 0px #000000)' }}><Link to="/properties" style={{ textDecoration: 'none', color: 'black' }}>Properties</Link></p>
        </div>
        <div className="github" style={{ padding: '0 20px' }}>
          <p style={{ fontSize: '14px', fontFamily: 'Poppins', backgroundColor: 'white', padding: '2.5px 20px', borderRadius: '8px', filter: 'drop-shadow(3.375px 3.375px 0px #000000)' }}><Link to={{ pathname: "https://www.github.com/kapaman" }} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>Github</Link></p>
        </div>
        <div className="add" style={{ minWidth: '170px', padding: '0 20px', display: 'flex', alignItems: 'center' }}>
          <button onClick={() => props.setShow(!props.show)} style={{ cursor: 'pointer', fontSize: '14px', border: 'none', fontFamily: 'Poppins', backgroundColor: 'black', color: 'white', padding: '2.5px 20px', borderRadius: '8px', filter: 'drop-shadow(1.975px 1.975px 0px #ffffff)' }}>{props.addNew}</button>
        </div>
      </div>
    </div>

  );
// return (
// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Container>
//   <Navbar.Brand href="#home"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>WhatsGood</Link></Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="ms-auto">
      
//       <Nav.Link href="#deets"><p style={{ fontSize: '14px', fontFamily: 'Poppins', backgroundColor: 'white', padding: '2.5px 20px', borderRadius: '8px', filter: 'drop-shadow(3.375px 3.375px 0px #000000)' }}><Link to="/properties" style={{ textDecoration: 'none', color: 'black' }}>Properties</Link></p></Nav.Link>
//       <Nav.Link href="#deets"><p style={{ fontSize: '14px', fontFamily: 'Poppins', backgroundColor: 'white', padding: '2.5px 20px', borderRadius: '8px', filter: 'drop-shadow(3.375px 3.375px 0px #000000)' }}><Link to={{ pathname: "https://www.github.com/kapaman" }} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>Github</Link></p></Nav.Link>
//       <Nav.Link>
//       <button onClick={() => props.setShow(!props.show)} style={{ cursor: 'pointer', fontSize: '14px', border: 'none', fontFamily: 'Poppins', backgroundColor: 'black', color: 'white', padding: '2.5px 20px', borderRadius: '8px', filter: 'drop-shadow(1.975px 1.975px 0px #ffffff)' }}>{props.addNew}</button>
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
//   </Container>
 
// </Navbar>
// )
};

export default NavBar ;
