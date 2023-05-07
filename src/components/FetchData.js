import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../Store/store";

const FetchData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        const showData = data.map((data) => {
          return data.show;
        });
        dispatch(setData(showData));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return <div></div>;
};

export default FetchData;
