import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Summary.css";
import FetchData from "../components/FetchData";

const Summary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const clickHandler = () => {
    navigate(`./book-ticket`);
  };

  const data = useSelector((state) => state.global.data);

  const details = data.find((show) => {
    return show.name.replace(" ", "") === id;
  });

  const summary = details ? details.summary : "";

  return (
    <div className="container">
      <div className="summary">
        <h1>Summary</h1>
        <div dangerouslySetInnerHTML={{ __html: summary }}></div>
        <br />
        <button onClick={clickHandler}>Book Show</button>
      </div>
    </div>
  );
};

export default Summary;
