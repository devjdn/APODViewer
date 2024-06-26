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
    return <p>Loading</p>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className='apod'>
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
