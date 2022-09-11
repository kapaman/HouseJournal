import React, { useState } from "react";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useParams } from "react-router-dom";
import Slider from "@material-ui/core/Slider";
import DragDrop from "./DragDrop";
import { useContext } from "react";
import { DataContext } from "../App";

const AddView2 = ({ views, handleSubmit, setImage, show, setShow }) => {
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
  };

  const handleViewChange = (event) => {
    let viewName = event.target.innerText;
    let finder = views.find((el) => el.name === viewName);
    if (finder) {
      setWeight(finder.weight);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid" }}>
      <div
        className="card cardview"
        style={{
          backgroundColor: "white",
          color: "black",
          display: "grid",
          width: "350px",
          gridGap: "15px",
          padding: "20px 20px 20px 20px",
          border: "0.5px solid #b0b0b0",
          borderRadius: "20px",
          boxShadow: "1px 1px 4px 1px rgba(0, 0, 0, 0.25)",
          position: "fixed",
          bottom: "0",
          right: "0",
          marginRight: "50px",
          marginBottom: "30px",
        }}
      >
        <DragDrop
          setImage={setImage}
          height={300}
          width={300}
          quality={80}
        ></DragDrop>

        <div className="inputrating" style={{ display: "grid" }}>
          {" "}
          <Autocomplete
            onChange={handleViewChange}
            id="combo-box-demo"
            options={views}
            input={{
              border: "0.3px solid rgb(11, 31, 223)",
              borderRadius: "10px",
            }}
            style={{ fontFamily: "Poppins" }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                size={window.innerWidth < 550 ? "small" : "medium"}
                label="Title"
                variant="outlined"
              />
            )}
          />
        </div>

        <div
          className="textarea"
          style={{ display: "grid", fontFamily: '"Poppins"', fontWeight: 200 }}
        >
          <TextField
            multiline
            size="small"
            rows={2}
            id="outlined-basic"
            label="Description(optional)"
            inputProps={{ maxLength: 70 }}
            variant="outlined"
          />
        </div>

        <div
          className="inputrating"
          style={{ display: "grid", gridTemplateColumns: "67% auto" }}
        >
          <p
            className="ratingpara"
            style={{
              marginBottom: "10px",
              marginTop: "0px",
              gridColumnStart: 1,
              gridColumnEnd: 5,
              fontFamily: '"Poppins"',
              fontWeight: 300,
              fontSize: "15px",
            }}
          >
            Rating
          </p>
          <Slider
            onChange={handleChangeRating}
            defaultValue={3}
            aria-labelledby="discrete-slider"
            marks
            step={0.5}
            min={0.5}
            max={5}
            style={{ color: "#364cff" }}
          />
          <span
            className="rating"
            style={{
              gridColumnStart: 4,
              gridColumnEnd: 5,
              textAlign: "center",
              background: "white",
              color: "black",
              border: "0.1px solid rgba(0, 0, 0, 0.65)",
              boxShadow: "2px 2px 0px #000000",
              borderRadius: "12px",
              padding: "5px 20px 5px 20px",
              fontSize: "12px",
              fontFamily: '"Poppins"',
              fontWeight: 600,
              minWidth: "19px",
            }}
          >
            {rating}
          </span>
        </div>
        <div
          className="inputrating"
          style={{ display: "grid", gridTemplateColumns: "67% auto" }}
        >
          <p
            className="ratingpara"
            style={{
              marginBottom: "10px",
              marginTop: "0px",
              gridColumnStart: 1,
              gridColumnEnd: 5,
              fontFamily: '"Poppins"',
              fontWeight: 300,
              fontSize: "15px",
            }}
          >
            Weight
          </p>
          <Slider
            aria-labelledby="discrete-slider"
            marks
            value={weight}
            onChange={handleChangeWeight}
            step={1}
            min={1}
            max={5}
            style={{ color: "#364cff" }}
          />
          <span
            className="rating"
            style={{
              padding: "5px 0 5px 0",
              minWidth: "60px",
              gridColumnStart: 4,
              gridColumnEnd: 5,
              textAlign: "center",
              background: "white",
              color: "black",
              border: "0.1px solid rgba(0, 0, 0, 0.65)",
              boxShadow: "2px 2px 0px #000000",
              borderRadius: "12px",
              fontSize: "12px",
              fontFamily: '"Poppins"',
              fontWeight: 600,
            }}
          >
            {getWeight(weight)}
          </span>
        </div>

        <div
          className="buttons"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto auto",
            gridGap: "15px",
            marginTop: "10px",
          }}
        >
          <button
            className="cancel"
            style={{
              gridColumn: "4/5",
              background: "white",
              color: "black",
              padding: "5px 15px 5px 15px",
              borderRadius: "13px",
              fontSize: "17px",
              border: "1px solid #727272",
              fontWeight: 400,
              cursor: "pointer",
            }}
            onClick={() => setShow(!show)}
          >
            cancel
          </button>
          <button
            className="save"
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
            }}
            type={"submit"}
            value="submit"
          >
            save
          </button>
        </div>
      </div>
    </form>
  );
};

const AddView = ({ selectedProperty, setSelectedProperty }) => {
  const {
    properties,
    setProperties,
    views,
    setViews,
    showProperty,
    setShowProperty,
  } = useContext(DataContext);
  const show = showProperty,
    setShow = setShowProperty;
  const [image, setImage] = useState(null);
  const id = useParams().id;

  const handleAddView = (currentParts, currentProp, newPart) => {
    axios
      .put(
        `https://whats-good-backend-kapaman.vercel.app/properties/${id}`,
        newPart
      )
      .then((_response) => {
        let newproperties = properties.map((el) => {
          if (el._id.toString() === id.toString()) {
            return { ...currentProp, parts: [...currentParts] };
          } else return el;
        });
        setSelectedProperty({
          ...selectedProperty,
          parts: [...selectedProperty.parts, newPart],
        });
        setProperties(newproperties);
        setShow(!show);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let currentProp = properties.find(
      (el) => el._id.toString() === id.toString()
    );

    let newWeight = parseFloat(parseFloat(event.target[8].value).toFixed(1));

    let currentParts = currentProp.parts;

    currentParts = [
      ...currentParts,
      {
        img: image != null ? image : "http://placehold.it/512x512",
        name: event.target[1].value,
        description: event.target[5].value,
        rating: parseFloat(parseFloat(event.target[7].value).toFixed(1)),
      },
    ];
    currentProp.parts = currentParts;
    let newPart = {
      img: image != null ? image : "http://placehold.it/512x512",
      name: event.target[1].value,
      description: event.target[5].value,
      rating: parseFloat(parseFloat(event.target[7].value).toFixed(1)),
    };

    let finder = views.find(
      (el) => el.name.toLowerCase() === event.target[1].value.toLowerCase()
    );

    if (parseFloat(finder.weight) !== newWeight) {
      axios
        .put(
          `https://whats-good-backend-kapaman.vercel.app/views/${finder._id}`,
          { ...finder, weight: newWeight }
        )
        .then((res) => {
          let newViews = views.map((el) => {
            if (el.name === finder.name) {
              return { ...finder, weight: newWeight };
            } else return el;
          });
          setViews(newViews);
          return newViews;
        })
        .then((res) => handleAddView(currentParts, currentProp, newPart));
    } else {
      handleAddView(currentParts, currentProp, newPart);
    }
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
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
    );
  } else {
    return (
      <AddView2
        show={show}
        setShow={setShow}
        views={views}
        handleSubmit={handleSubmit}
        image={image}
        setImage={setImage}
      ></AddView2>
    );
  }
};

export default AddView;
