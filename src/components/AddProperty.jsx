import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import DragDrop from "./DragDrop";
import { useContext } from "react";
import { DataContext } from "../App";

const AddProperty = () => {
  const { showProperty, setShowProperty, properties, setProperties } =
    useContext(DataContext);
  const show = showProperty,
    setShow = setShowProperty;
  const [image, setImage] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

    let price = formatter.format(parseInt(event.target[3].value));

    let newProperty = {
      img: image !== null ? image : "http://placehold.it/512x512",
      address: event.target[1].value,
      beds: parseInt(event.target[7].value),
      bathrooms: parseInt(event.target[9].value),
      area: parseInt(event.target[5].value),
      price: price,
      parts: [],
    };

    axios
      .post(`https://house-a8y1.onrender.com/properties/`, newProperty)
      .then((response) => {
        let newproperties = properties.concat(response.data);
        setProperties(newproperties);
        setShow(!show);
        setImage(null);
      })
      .catch((err) => {
        setImage(null);
        console.log(err);
      });
  };

  if (show === false) {
    return (
      <svg
        id="expand"
        onClick={() => setShow(!show)}
        xmlns="http://www.w3.org/2000/svg"
        width={70}
        height={70}
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          marginRight: "50px",
          marginBottom: "50px",
          cursor: "pointer",
        }}
        fill="currentColor"
        className="bi bi-plus-circle-fill"
        viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <div
          className="card cardprop"
          style={{
            backgroundColor: "white",
            color: "black",
            display: "grid",
            width: "350px",
            gridGap: "15px",
            padding: "20px 25px",
            border: "0.5px solid #b0b0b0",
            borderRadius: "20px",
            boxShadow: "1px 1px 4px 1px rgba(0, 0, 0, 0.25)",
            position: "fixed",
            bottom: "0",
            right: "0",
            marginRight: "50px",
            marginBottom: "50px",
            zIndex: "9",
            rowGap: "25px",
          }}>
          <DragDrop
            setImage={setImage}
            height={400}
            width={400}
            quality={100}></DragDrop>

          <div
            className="textarea"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              fontFamily: '"Poppins"',
              fontWeight: 200,
            }}>
            <TextField
              multiline
              margin="none"
              rows={2}
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
          </div>
          <div
            className="inputrating"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "inherit",
              columnGap: "25px",
            }}>
            <TextField
              label="Price"
              variant="outlined"
              size="small"></TextField>
            <TextField label="Area" variant="outlined" size="small"></TextField>
          </div>
          <div
            className="inputrating"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              width: "inherit",
              columnGap: "25px",
            }}>
            <TextField
              label="Bedrooms"
              variant="outlined"
              size="small"></TextField>
            <TextField
              label="Bathrooms"
              variant="outlined"
              size="small"></TextField>
          </div>
          <div
            className="buttons"
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto",
              gridGap: "15px",
              marginTop: "10px",
            }}>
            <button
              className="cancel"
              onClick={() => setShow(!show)}
              type="button"
              style={{
                cursor: "pointer",
                gridColumn: "4/5",
                background: "white",
                color: "black",
                padding: "5px 15px 5px 15px",
                borderRadius: "13px",
                fontSize: "17px",
                border: "1px solid #727272",
                fontWeight: 400,
              }}>
              cancel
            </button>
            <button
              className="save"
              type="submit"
              style={{
                gridColumn: "5/6",
                background: "black",
                color: "white",
                padding: "5px 15px 5px 15px",
                borderRadius: "13px",
                fontSize: "17px",
                border: "none",
                fontWeight: 400,
                cursor: "pointer",
              }}>
              save
            </button>
          </div>
        </div>
      </form>
    );
  }
};

export default AddProperty;
