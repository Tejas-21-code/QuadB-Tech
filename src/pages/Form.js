import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import image from "../assets/no-image.jpg";
import FetchData from "../components/FetchData";

import "./Form.css";

function Form() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const { id } = useParams();

  const data = useSelector((state) => state.global.data);

  const details = data.find((show) => {
    return show.name.replace(" ", "") === id;
  });
  const summary = details ? details.summary : "";
  useEffect(() => {
    if (details) {
      setEnteredTitle(details.name);
      setEnteredImage(details.image);
      setEnteredDescription(details.summary);
    }
  }, [details]);

  const clickHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    };

    console.log(formData);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  return (
    <form>
      <div className="container-element">
        <div className="box">
          <img
            src={
              details ? (details.image ? details.image.medium : image) : image
            }
            alt={details ? details.name : "No Image Found"}
          />
          <div dangerouslySetInnerHTML={{ __html: summary }}></div>
        </div>
        <div className="box">
          <label htmlFor="title">Movie Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            required
            id="title"
            value={details ? details.name : ""}
          />
        </div>
        <div className="btn">
          <button onClick={clickHandler}>Book Ticket</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
