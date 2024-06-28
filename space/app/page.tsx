import Apod from "./api/daily-api";
import { CalendarDays } from "lucide-react";

export default function Home() {
  return (
    <div className="content">
      <div className="site-introduction-text">
          <h1>Your online view into the beginning of everything.</h1>
          <h3>View NASA&#39;s library of history with SpaceScope</h3>
      </div>
      <section className="landing-nav">
        <article>
          <div className="feature-info">
            <h3>Daily APOD</h3>
            <p>View NASA&#39;s picture of the day from today.</p>
          </div>
        </article>
        <article>
          <div className="feature-info">
            <h3>APOD Time Machine</h3>
            <p>Select a date and look back at the APOD from that date.</p>
          </div>
        </article>
        <article>
          <div className="feature-info">
            <h3>APOD Library</h3>
            <p>View an array of randomly fetched APODs from NASA&#39;s database.</p>
          </div>
        </article>
      </section>
      <Apod />
    </div>
  );
}
