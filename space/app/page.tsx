import Apod from "./api/daily-api";

export default function Home() {
  return (
    <div className="home">
      <div className="site-introduction-text">
          <h1>The cosmos at the click of a finger.</h1>
      </div>
      <Apod />
    </div>
  );
}
