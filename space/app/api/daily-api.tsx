'use client';

import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';

const Apod = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApodData = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
          params: {
            api_key: "8p7wu7IiHjpbujhNGUIRWU8QgAOORkuvVSFWxBEV"
          }
        });
        setData(response.data);
        console.log(response);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchApodData();
  }, []);

  if(loading){
    return(
      <div className="page-description">
        <h3>Astronomy Picture of the Day (APOD)</h3>
        <p>APOD is a NASA service, which allows users to see a daily pictures/videos, taken by the world's best astrophotographers. We use this API and apply it to a clean and simple interface for viewers to interact with.</p>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className='apod'>
        <div className='page-intro'>
            <h1>Astronomy Picture of the Day ({data.service_version})</h1>
        </div>
        <div className='apod-api-content'>
            <div className='apod-info'>
                <h2>{data.title}</h2>
                <p>{data.explanation}</p>
                <strong><p>{data.copyright}</p></strong>
            </div>
            <div className='apod-img'>
                {data.media_type === 'image' ? (
                  <img src={data.url} alt={data.title} />
                ) : (
                  <iframe
                    title={data.title}
                    src={data.url}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )}
            </div>
        </div>
    </section>
  );
};

export default Apod;
