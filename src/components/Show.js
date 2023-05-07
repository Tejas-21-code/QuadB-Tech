import "./Show.css";
import image from "../assets/no-image.jpg";
import { useNavigate } from "react-router-dom";

function Show({ show }) {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/${show.name.replace(" ", "")}`);
  };

  return (
    <div className="show">
      <img src={show.image ? show.image.medium : image} alt={show.name} />
      <div className="details">
        <p>Name: {show.name}</p>
        <p>
          Ratings:
          {show.rating.average
            ? " " + show.rating.average
            : " Be the first to rate this movie!"}
        </p>
        <p>Language: {show.language}</p>
        <button onClick={clickHandler}>Details</button>
      </div>
    </div>
  );
}

export default Show;
