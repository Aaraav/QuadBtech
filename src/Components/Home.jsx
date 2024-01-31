import React, { useState, useEffect, useContext } from 'react';
import { SummaryContext } from '../Context';
import { Link } from 'react-router-dom'; 

export default function Home() {
  const [data, setData] = useState([]);
  const { setCurrentSummary } = useContext(SummaryContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const summary = (id) => {
    setCurrentSummary(id);
  };

  return (
    <div>
      {data &&
        data.map((item) => (
          <div className='box' key={item.show.id}>
            <img src={item.show.image && item.show.image.medium} alt={item.show.name} />
            <ul>
              <h2>{item.show.name}</h2>
              <p>Languages:{item.show.language}</p>
              <p>Rating:{item.show.rating && item.show.rating.average}</p>
            </ul>
            {/* Use Link instead of a tag to navigate to the summary route */}
            <Link to={`/summary`} onClick={() => summary(item.show.id)}>
              <button>Show Summary</button>
            </Link>
          </div>
        ))}
    </div>
  );
}
