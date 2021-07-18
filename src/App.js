import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch, Route, Link, useParams, Redirect
} from "react-router-dom"
import axios from 'axios'
import AllView from './components/View';
import arrow from './arrow.png'
import AddProperty from './components/AddProperty';
import AddView from './components/AddView';
import { Rating } from '@material-ui/lab';
import './index.css';

const HouseCard2 = (props) => {
  return (

    <div class="higherHouseCard"
      style={{ display: 'flex', justifyContent: 'center', width: '25%', textAlign: 'center', fontSize: '30px', margin: '20px 0', borderRadius: '10px', backgroundColor: 'white', padding: '5px' }}>
      <div className="view"
        style={{ display: 'flex', flexDirection: 'column', boxShadow: '1.68443px 2.24591px 14.0369px rgba(0, 0, 0, 0.25)', borderImageSlice: 1, borderWidth: '0.5px', lineHeight: 1, textAlign: 'center', width: '250px', height: '100%', borderRadius: '25px' }}>
        <div>
          <img src={props.src}
            style={{ alignSelf: 'center', height: '220px', width: '250px', boxShadow: '1.08px 1.4px 8.6px -2.1px black', borderTopLeftRadius: '25px', borderTopRightRadius: '25px' }} />
        </div>
        <div className="innerView"
          style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', width: '100%', flex: 1, justifyContent: 'space-between' }}>
          <div
            style={{ marginTop: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '0 15px 0 15px' }}>
              <Rating name="half-rating-read" defaultValue={props.stars} precision={0.1} readOnly style={{color:'#FBFF12'}} />
          </div>
          <div>
            <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center' }}>
              <p className="name"
                style={{ fontSize: '16px', fontWeight: 600, lineHeight: '20px', marginTop: '15px', maxWidth: '200px', textAlign: 'center',fontFamily:'Poppins' }}>{props.address}</p>
            </div>
          </div>
          <div className="desc" style={{ width: '100%', textAlign: 'left' }}>
            <div style={{ marginBottom: '15px', display: 'grid' }}>
              <p className="rating"
                style={{ fontSize: '20px', margin: '10px', backgroundColor: 'white', fontFamily: '"Poppins"', fontWeight: 400, color: 'white', borderRadius: '10px', lineHeight: '1.5', maxWidth: '200px', alignSelf: 'center', justifySelf: 'center',padding:'0 30px 0 30px',boxShadow: '3px 3px 0px #000000',borderTop:'0.1px solid rgba(0, 0, 0, 0.65)',borderLeft:'0.1px solid rgba(0, 0, 0, 0.65)',borderRadius:'12px' }}>
                  <Link to={`properties/${props.id}`} style={{textDecoration:'none',color:'black'}}> <img height={16} width={16} src={arrow}></img></Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>)
}



const HouseCard = (props) => {
  return (
    <div style={{ justifySelf: 'center', marginBottom: '20px', border: '1px solid black', backgroundColor: 'white', padding: '20px', borderRadius: '20px', width: 'min-content' }}>
      <img src={props.src} style={{ height: 200, width: 200, borderRadius: '10px' }}></img>
      <p>{props.stars} stars</p>
      <h2>{props.address}</h2>
      <Link to={`properties/${props.id}`}>link</Link>
    </div>)
}

const Main = (props) => {
  return (
    <div className="flex-container"
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'white',marginTop:'80px' }}>
      {props.properties.sort((a, b) => b.stars - a.stars).map(el => <HouseCard2 id={el._id} key={el._id} stars={el.stars} address={el.address} src={el.img}></HouseCard2>)}
      {/* <HouseCard address="567" src="https://media.istockphoto.com/photos/single-family-new-construction-home-in-suburb-neighborhood-in-the-picture-id1147674297?k=6&m=1147674297&s=612x612&w=0&h=hgmO3-TlHfRE3pcX63T5nbrfPD07BYMR8R608MUtKco="></HouseCard> */}
    </div>
  )
}
const App = () => {
  let [properties, setProperties] = useState([]);
  let [views, setViews] = useState([]);
  let [showProperty, setShowProperty] = useState(false);
  let [showView, setShowView] = useState(false);


  useEffect(() => {
    axios
      .get('http://localhost:3001/properties')
      .then(response => {
        console.log(response.data);
        setProperties(response.data);
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:3001/views')
      .then(response => {
        console.log(response.data);
        setViews(response.data);
      })
  }, [])

  return (
    <Router>
      <div >
        <Switch >
          <Route path="/properties/:id">
            {console.log("from switch of router", properties)}
            <Navbar addNew="add View" show={showView} setShow={setShowView}></Navbar>
            <AllView show={showView} setShow={setShowView} setViews={setViews} views={views} properties={properties} setProperties={setProperties} ></AllView>

          </Route>
          <Route path="/properties">
          
            <Navbar show={showProperty} setShow={setShowProperty} addNew="add Property"></Navbar>
            <Main properties={properties} ></Main>
            <AddProperty show={showProperty} setShow={setShowProperty} properties={properties} setProperties={setProperties}></AddProperty>
          </Route>
          <Route path="/">
            <Navbar></Navbar>
            <Redirect to="properties"></Redirect>
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App