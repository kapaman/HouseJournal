import React from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams
} from "react-router-dom"

const Navi = (props) => {
  return (

    <nav>
      <div className="logo"><Link to="/properties" style={{textDecoration:'none',color:'white'}}>HouseJournal</Link></div>
      <input type="checkbox" id="click" />
      <label htmlFor="click" className="menu-btn">
        <i className="fa fa-bars" />
      </label>
      <ul>
      <li><Link to="/properties" >Properties</Link></li>
      <li><Link to={{ pathname: "https://www.github.com/kapaman" }} target="_blank" >Github</Link></li>

        <li><a className="onclicker" onClick={() => props.setShow(!props.show)} >{props.addNew}</a></li>
      </ul>
    </nav>
  )
}

export default Navi;