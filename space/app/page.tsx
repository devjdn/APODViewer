import Apod from "./api/daily-api";

export default function Home() {
  return (
    <div className="content">
      <div className="site-introduction-text">
          <h1>Look into the past.</h1>
          <h3>View NASA's library of history with SpaceScope</h3>
      </div>
      <section className="landing-nav">
        <article>
          <h3>Daily APOD</h3>
          <p>View NASA's picture of the day from today.</p>
        </article>
        <article>
          <h3>APOD Time Machine</h3>
          <p>Select a date and look back at the APOD from that date.</p>
        </article>
        <article>
          <h3>APOD Library</h3>
          <p>View an array of randomly fetched APODs from NASA's database.</p>
        </article>
        <article>
          <h3>Mars Rovers</h3>
          <p>Take a look at the different rovers that have been trailblazing on Mars.</p>
        </article>
        <article>
          <h3>Daily Mars Photo</h3>
          <p>View an array of randomly fetched APODs from NASA's database.</p>
        </article>
        <article>
          <h3>Rover Photo Search</h3>
          <p>View an array of randomly fetched APODs from NASA's database.</p>
        </article>
      </section>
      <Apod />
    </div>
  );
}
