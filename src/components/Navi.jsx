import React from 'react'
import {
  Link
} from "react-router-dom"

const Navi = (props) => {
  return (

    <nav>
      <div className="logo"><Link to="/properties" style={{ textDecoration: 'none', color: 'white' }}>HouseJournal</Link></div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fa fa-bars" />
      </label>
      <ul>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/properties" >Properties</Link></li>
        {props.show !== undefined ?
          <li><a className="onclicker" onClick={() => props.setShow(!props.show)} >{props.addNew}</a></li> : null}

      </ul>
    </nav>
  )
}

export default Navi;