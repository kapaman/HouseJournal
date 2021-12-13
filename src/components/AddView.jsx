import React, { useState } from "react";
import axios from "axios";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {
  useParams,
} from "react-router-dom";
import Slider from '@material-ui/core/Slider';
import DragDrop from "./DragDrop";

const AddView2 = ({ props, handleSubmit }) => {
  //console.log("from addview2", props)
  const [weight, setWeight] = useState(3);
  const [rating, setRating] = useState(3);

  const handleChangeRating = (event, newValue) => {
    setRating(newValue);
  };

  const handleChangeWeight = (event, newValue) => {
    setWeight(newValue);
  };

  const getWeight = (weight) => {
    if (weight === 1) return "Very Low";
    if (weight === 2) return "Low";
    if (weight === 3) return "Medium";
    if (weight === 4) return "High";
    if (weight === 5) return "Very High";

  }


  const handleViewChange = (event) => {
    //console.log(event.target.innerText)
    let viewName = event.target.innerText;
    let finder = props.views.find(el => el.name === viewName);
    if (finder) {
      setWeight(finder.weight);
    }
  }
  //console.log(window.innerWidth);

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid' }}>
      <div className="card cardview" style={{
        backgroundColor: 'white', color: 'black', display: 'grid', width: '350px', gridGap: '15px', padding: '20px 20px 20px 20px', border: '0.5px solid #b0b0b0', borderRadius: '20px', boxShadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.25)', position: "fixed",
        bottom: "0",
        right: "0",
        marginRight: "50px",
        marginBottom: "30px",
      }}>
        {/* <div style={{ display: 'flex', border: '3px dashed #8D8D8D', borderRadius: '20px', padding: '10px 10px 10px 10px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width={128} height={128} fill="rgba(11, 31, 223, 0.7)" className="bi bi-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
          </svg>
          <p style={{ alignSelf: 'center', marginLeft: '20px', marginBottom: '10px', marginTop: '0px' }}>Drag and drop image, or Upload</p>
        </div> */}
        <DragDrop></DragDrop>
        {/* <div className="inputrating" style={{ display: 'grid', gridTemplateColumns: '67% auto' }}><input className="title" placeholder="Title" style={{ width: '230px', gridColumnStart: 1, gridColumnEnd: 3, marginBottom: '0px', borderRadius: '10px', border: '0.3px solid #0B1FDF', fontFamily: '"Poppins"', fontSize: '14px', padding: '5px' }} /> <span className="rating" style={{ fontFamily: '"Poppins"', fontSize: '13px', padding: '5px 30px', gridColumnStart: 4, gridColumnEnd: 5, textAlign: 'center', background: 'white', color: 'black', border: '0.1px solid rgba(0, 0, 0, 0.65)', boxShadow: '2px 2px 0px #000000', borderRadius: '12px', fontWeight: 600 }}>{rating}</span></div> */}


        <div className="inputrating" style={{ display: 'grid' }}> <Autocomplete
          onChange={handleViewChange}
          id="combo-box-demo"
          options={props.views}
          input={{ border: "0.3px solid rgb(11, 31, 223)", borderRadius: '10px' }}
          style={{ fontFamily: 'Poppins' }}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => <TextField {...params} size={window.innerWidth < 550 ? "small" : "medium"} label="Title" variant="outlined" />}
        /></div>





        {/* <div className="textarea" style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', fontFamily: '"Poppins"', fontWeight: 200 }}><textarea className="description" placeholder="Description(optional)" style={{ gridColumnStart: 1, gridColumnEnd: 5, marginTop: '0px', borderRadius: '4px', fontFamily: '"Poppins"', border: '0.3px solid #cbcbcb', padding: '5px', fontSize: '13px' }} defaultValue={""} /></div> */}


        <div className="textarea" style={{ display: 'grid', fontFamily: '"Poppins"', fontWeight: 200 }}><TextField multiline size="small"
          rows={2} id="outlined-basic" label="Description(optional)" inputProps={{ maxLength: 70 }} variant="outlined" /></div>





        <div className="inputrating" style={{ display: 'grid', gridTemplateColumns: '67% auto' }}>
          <p className="ratingpara" style={{ marginBottom: '10px', marginTop: '0px', gridColumnStart: 1, gridColumnEnd: 5, fontFamily: '"Poppins"', fontWeight: 300, fontSize: '15px' }}>Rating</p>
          <Slider onChange={handleChangeRating}
            defaultValue={3}
            aria-labelledby="discrete-slider"
            marks
            step={0.5}
            min={0.5}
            max={5}
            style={{ color: '#364cff' }}
          /><span className="rating" style={{ gridColumnStart: 4, gridColumnEnd: 5, textAlign: 'center', background: 'white', color: 'black', border: '0.1px solid rgba(0, 0, 0, 0.65)', boxShadow: '2px 2px 0px #000000', borderRadius: '12px', padding: '5px 20px 5px 20px', fontSize: '12px', fontFamily: '"Poppins"', fontWeight: 600, minWidth: '19px' }}>{rating}</span>
        </div>
        <div className="inputrating" style={{ display: 'grid', gridTemplateColumns: '67% auto' }}>
          <p className="ratingpara" style={{ marginBottom: '10px', marginTop: '0px', gridColumnStart: 1, gridColumnEnd: 5, fontFamily: '"Poppins"', fontWeight: 300, fontSize: '15px' }}>Weight</p>
          <Slider
            aria-labelledby="discrete-slider"
            marks
            value={weight}
            onChange={handleChangeWeight}
            step={1}
            min={1}
            max={5}
            style={{ color: '#364cff' }}
          /><span className="rating" style={{ padding: '5px 0 5px 0', minWidth: '60px', gridColumnStart: 4, gridColumnEnd: 5, textAlign: 'center', background: 'white', color: 'black', border: '0.1px solid rgba(0, 0, 0, 0.65)', boxShadow: '2px 2px 0px #000000', borderRadius: '12px', fontSize: '12px', fontFamily: '"Poppins"', fontWeight: 600 }}>{getWeight(weight)}</span>
        </div>

        <div className="buttons" style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto', gridGap: '15px', marginTop: '10px' }}><button className="cancel" style={{ gridColumn: '4/5', background: 'white', color: 'black', padding: '5px 15px 5px 15px', borderRadius: '13px', fontSize: '17px', border: '1px solid #727272', fontWeight: 400, cursor: "pointer" }} onClick={() => props.setShow(!props.show)}>cancel</button><button className="save" style={{ gridColumn: '5/6', background: 'black', color: 'white', padding: '5px 15px 5px 15px', borderRadius: '13px', fontSize: '17px', border: 'none', fontWeight: 400, cursor: "pointer" }} type={"submit"} value="submit">save</button></div>
      </div>
    </form>

  )
}


const AddView = (props) => {
  //console.log("these are the props", props);
  const id = useParams().id;
  //console.log(props.views);

  const handleAddView = (newrating, currentParts, currentProp) => {


    // send only the new part
    console.log(id);
    axios
      .put(`http://192.168.18.163:3001/properties/${id}`, currentProp)
      .then((response) => {
        //console.log(response," from put to parts");
        let newproperties = props.properties.map((el) => {
          if ((el._id).toString() === (id).toString()) {
            return { ...currentProp, parts: [...currentParts] };
          } else return el;
        });
        props.setProperties(newproperties);
        props.setShow(!props.show);
      }).catch(err => {
        //console.log(err);
      });

  }


  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("You rated it ", parseFloat(parseFloat(event.target[7].value).toFixed(1)))
    let currentProp = props.properties.find((el) => (el._id).toString() === (id).toString());
    let newrating;
    let newWeight = parseFloat(parseFloat(event.target[8].value).toFixed(1));
    //console.log(event.target);
    //console.log(event.target[0].value);
    //console.log(event.target[1].value);
    //console.log(event.target[2].value);
    //console.log(event.target[3].value);
    //console.log(event.target[4].value);
    //console.log(event.target[5].value);
    //console.log(event.target[6].value);
    //console.log(event.target[7].value);
    //console.log(event.target[8].value);
    //console.log(event.target[9].value);

    let currentParts = currentProp.parts;

    let numerator = 0, denominator = 0;
    for (let i = 0; i < currentParts.length; i++) {
      let finder = props.views.find(el => (el.name).toLowerCase() === (currentParts[i].name).toLowerCase())
      if (finder != undefined) {
        //console.log(finder, currentParts[i])
        numerator += parseFloat(finder.weight) * parseFloat(currentParts[i].rating);
        denominator += finder.weight;
      }
    }

    currentParts = [
      ...currentParts,
      //img: "http://placehold.it/512x512",
      {
        name: event.target[1].value,
        description: event.target[5].value,
        rating: parseFloat(parseFloat(event.target[7].value).toFixed(1)),
      }
    ];
    currentProp.parts = currentParts;


    numerator += parseFloat(parseFloat(event.target[7].value).toFixed(1)) * newWeight;
    denominator += newWeight;

    //console.log(numerator, denominator);
    //console.log(event.target[0].value);
    newrating = (numerator * 1.0 / denominator).toFixed(1);
    let finder = props.views.find(el => (el.name).toLowerCase() === (event.target[1].value).toLowerCase())
    //console.log(finder);
    if (parseFloat(finder.weight) !== newWeight) {
      //console.log(finder);
      axios.put(`http://192.168.18.163:3001/views/${finder._id}`, { ...finder, weight: newWeight })
        .then(res => {
          let newViews = props.views.map(el => {
            if (el.name === finder.name) {
              return { ...finder, weight: newWeight };
            } else return el;
          })
          //console.log(newViews);
          props.setViews(newViews);
          return newViews;
        })
        .then(res => handleAddView(newrating, currentParts, currentProp));
    } else {
      handleAddView(newrating, currentParts, currentProp);
    };

  }


  //   Wall AddView.jsx:158
  // <empty string> AddView.jsx:159
  // <empty string> AddView.jsx:160
  // undefined AddView.jsx:161
  // asdfasdfasdf AddView.jsx:162
  // undefined AddView.jsx:163
  // 3 AddView.jsx:164
  // 2 AddView.jsx:165
  // <empty string> AddView.jsx:166
  // submit

  if (props.show === false) {
    return (

      <svg id="expand" onClick={() => props.setShow(!props.show)} xmlns="http://www.w3.org/2000/svg" width={70} height={70} style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        marginRight: "50px",
        marginBottom: "50px",
        cursor: "pointer",
      }} fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>)
  } else {
    return (
      <AddView2 props={props} handleSubmit={handleSubmit}></AddView2>
      // <div
      //   style={{
      //     position: "fixed",
      //     bottom: "0",
      //     right: "0",
      //     marginRight: "50px",
      //     marginBottom: "50px",
      //     backgroundColor: "black",
      //     color: "white",
      //     fontSize: "20px",
      //     padding: "20px",
      //   }}>
      //   <form onSubmit={handleSubmit} style={{ display: "grid" }}>
      //     <input defaultValue="http://placehold.it/512x512"></input>
      //     <input placeholder="title"></input>
      //     <input placeholder="description"></input>
      //     <input placeholder="rating"></input>
      //     <input placeholder="weight"></input>
      //     <button onClick={() => props.setShow(!props.show)}> cancel</button>
      //     <button type="submit">submit</button>
      //   </form>
      // </div>
    );
  }
};

export default AddView;
