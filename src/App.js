import "./App.css";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import Summary from "./pages/Summary";
import Form from "./pages/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./Store/store";
import Nav from "./pages/Nav";
import FetchData from "./components/FetchData";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.global.data);

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

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Nav />}>
            <Route path="/" element={<HomePage data={data} />} exact />
            <Route path="/:id" element={<Summary data={data} />} />
            <Route path="/:id/book-ticket" element={<Form data={data} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
