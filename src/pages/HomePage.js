import Show from "../components/Show";

function HomePage({ data }) {
  return (
    <div>
      {data.map((show) => {
        return <Show show={show} />;
      })}
    </div>
  );
}

export default HomePage;
