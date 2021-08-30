import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import DragDrop from "./DragDrop";


const AddProperty = ({ show, setShow, properties, setProperties }) => {
  // const id = useParams().id;
  console.log(properties, setProperties);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target, "coming from the ogssss.")

    console.log(event.target[0].value);
    console.log(event.target[2].value);
    console.log(event.target[4].value);
    console.log(event.target[6].value);
    console.log(event.target[8].value);


    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });

    let price = (formatter.format(parseInt(event.target[2].value)))
    console.log(price);
    let newProperty = {
      img: "https://plachold.it/512x512",
      address: event.target[0].value,
      beds: parseInt(event.target[6].value),
      bathrooms: parseInt(event.target[8].value),
      area: parseInt(event.target[4].value),
      price: price,
      parts: [],
      stars: 0
    };

    axios
      .post(`http://localhost:3001/properties`, newProperty)
      .then((response) => {
        console.log(response.data);
        let newproperties = properties.concat(response.data)
        // console.log(response.data);
        setProperties(newproperties);
        setShow(!show);
      }).catch(err => {
        console.log(err);
      });
  };


  // let [show, setShow] = useState(false);
  if (show === false) {
    return (


      <svg id="expand" onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" width={70} height={70} style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        marginRight: "50px",
        marginBottom: "50px",
        cursor: "pointer",
      }} fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>)
    return (<div
      onClick={() => setShow(!show)}
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        marginRight: "50px",
        marginBottom: "50px",
        backgroundColor: "black",
        color: "white",
        fontSize: "40px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingRight: "30px",
        paddingLeft: "30px",
        borderRadius: "50%",
        cursor: "pointer",
      }}>
      +
    </div>
    );
  } else {

    return (
      <form onSubmit={handleSubmit}>
        <div className="card cardprop"  style={{
          backgroundColor: 'white', color: 'black', display: 'grid', width: '350px', gridGap: '15px', padding: '20px 25px', border: '0.5px solid #b0b0b0', borderRadius: '20px', boxShadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.25)', position: "fixed",
          bottom: "0",
          right: "0",
          marginRight: "50px",
          marginBottom: "50px", zIndex: '9', rowGap: '25px'
        }}>
          
            {/* <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} fill="rgba(11, 31, 223, 0.7)" className="bi bi-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
          </svg>
            <p style={{ alignSelf: 'center', marginLeft: '20px', marginBottom: '10px', marginTop: '0px' }}>Drag and drop image, or Upload</p> */}
            <DragDrop></DragDrop>
          
          <div className="textarea" style={{ display: 'grid', gridTemplateColumns: '1fr', fontFamily: '"Poppins"', fontWeight: 200 }}>
            {/* <textarea className="description" placeholder="Address" style={{ gridColumnStart: 1, gridColumnEnd: 5, marginTop: '0px', borderRadius: '10px', fontFamily: '"Poppins"', border: '0.3px solid #0B1FDF', padding: '5px', fontSize: '13px' }} defaultValue={""} /> */}
            <TextField multiline margin="none"
              rows={2} id="outlined-basic" label="Address" variant="outlined" />

          </div>
          <div className="inputrating" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: 'inherit', columnGap: '25px' }}>
            {/* <input className="title" id="price" placeholder="Price" style={{ marginBottom: '0px', borderRadius: '10px', border: '0.3px solid #0B1FDF', fontFamily: '"Poppins"', fontSize: '14px', padding: '5px', gridColumnStart: 1, gridColumnEnd: 2, width: '100%' }} /> */}

            <TextField label="Price" variant="outlined" size="small"></TextField>
            {/* <input className="title" id="area" placeholder="Area" style={{ marginBottom: '0px', borderRadius: '10px', border: '0.3px solid #0B1FDF', fontFamily: '"Poppins"', fontSize: '14px', padding: '5px', gridColumnStart: 2, gridColumnEnd: 3, width: '100%' }} /> */}
            <TextField label="Area" variant="outlined" size="small"></TextField>
          </div>
          <div className="inputrating" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: 'inherit', columnGap: '25px' }}>
            {/* <input className="title" id="price" placeholder="Bedrooms" style={{ marginBottom: '0px', borderRadius: '10px', border: '0.3px solid #0B1FDF', fontFamily: '"Poppins"', fontSize: '14px', padding: '5px', width: '100%' }} />
            <input className="title" id="area" placeholder="Bathrooms" style={{ marginBottom: '0px', borderRadius: '10px', border: '0.3px solid #0B1FDF', fontFamily: '"Poppins"', fontSize: '14px', padding: '5px', width: '100%' }} /> */}
            <TextField label="Bedrooms" variant="outlined" size="small"></TextField>
            <TextField label="Bathrooms" variant="outlined" size="small"></TextField>
          </div>
          <div className="buttons" style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto', gridGap: '15px', marginTop: '10px' }}>
            <button className="cancel" onClick={() => setShow(!show)} type="button" style={{ cursor: 'pointer', gridColumn: '4/5', background: 'white', color: 'black', padding: '5px 15px 5px 15px', borderRadius: '13px', fontSize: '17px', border: '1px solid #727272', fontWeight: 400 }}>cancel</button>
            <button className="save" type="submit" style={{ gridColumn: '5/6', background: 'black', color: 'white', padding: '5px 15px 5px 15px', borderRadius: '13px', fontSize: '17px', border: 'none', fontWeight: 400, cursor: 'pointer' }} >save</button>

          </div>
        </div>
      </form>

    )



    return (
      <div
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          marginRight: "50px",
          marginBottom: "50px",
          backgroundColor: "black",
          color: "white",
          fontSize: "20px",
          padding: "20px",
        }}>
        <form onSubmit={handleSubmit} style={{ display: "grid" }}>
          <input defaultValue="http://placehold.it/512x512"></input>
          <input placeholder="address"></input>
          <input placeholder="beds"></input>
          <input placeholder="bathrooms"></input>
          <input placeholder="area"></input>
          <input placeholder="price"></input>
          <button onClick={() => setShow(!show)}> cancel</button>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
};

export default AddProperty;
