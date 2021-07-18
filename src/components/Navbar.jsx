import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const NavItem = (item) => {
  if (item.to != "none")
    return (
      <Link
        style={{
          margin: "10px",
        }}
        to={`${item.to.toLowerCase()}`}>
        {" "}
        {item.title}{" "}
      </Link>
    );
  else
    return (
      <button onClick={() => item.setShow(!item.show)}
        style={{
          margin: "10px",
        }}>
        {" "}
        {item.title}{" "}
      </button>
    );
};
const Navbar = (props) => {
  console.log(props);

  return (
    <div className="navbar" style={{ zIndex: '10', position: 'fixed', width: '100%', top: '0', display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgb(54, 76, 255)', margin: 0 }}>
      <div className="brand" style={{ marginLeft: '20px', padding: '0 20px', color: 'white', fontSize: '18px' }}>
        <p style={{ fontFamily: 'Poppins', fontWeight: '700', filter: "drop-shadow(1.975px 1.975px 0px #000000)" }}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>WhatsGood</Link></p>
      </div>
      <div className="right" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
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


  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          alignContent: "flex-end",
        }}>
        <NavItem title="WhatsGood" to="/">
          {" "}
        </NavItem>{" "}
        <NavItem title="Properties" to="/">
          {" "}
        </NavItem>{" "}
        <NavItem show={props.show} setShow={props.setShow} title={props.addNew} to="none">
          {" "}
        </NavItem>{" "}
      </ul>{" "}
    </div>
  );
};

export default Navbar;
