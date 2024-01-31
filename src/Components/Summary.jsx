import React, { useState, useEffect, useContext } from 'react';
import { SummaryContext } from '../Context';
import { useNavigate } from 'react-router-dom';

export default function Summary() {
  const [data, setData] = useState(null);
  const [Fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState(false);
  const navigate = useNavigate();

  const { currentSummary } = useContext(SummaryContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${currentSummary}`);
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentSummary]);

  const bookTicket = () => {
    setState((prev) => !prev);
  };

  const payment = () => {
    if (!Fullname || !phone) {
      alert('Please complete your details');
    } else {
      alert(`Congratulations, Your Tickets are booked`);
      navigate('/');
    }

    localStorage.setItem('full name',Fullname);
    localStorage.setItem('contact number',phone);
    
  };

  return (
    <div className='summary'>
      {data && data.summary ? (
        <div>
          <h2>{data.name}</h2>
          <p>{data.summary}</p>
        </div>
      ) : (
        <>
        <p>Loading...</p>
        </>
      )}

      <button onClick={bookTicket}>Book Ticket</button>

      {state && (
        <div className='form'>
         
        <p>Fullname</p><input type="text" value={Fullname} onChange={(e) => setFullname(e.target.value)} placeholder="name" /> <br/>

        
        <p>Contact Number</p><input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="contact number" /><br/>

          
        <div className='show'><p>Show:</p> {data && <h2>{data.name}</h2>}</div>

        <div className='show'><p>Timing:</p> {data && <h2>{data.schedule.time}</h2>}</div>

          <button onClick={payment}>Book Tickets</button>
        </div>
      )}
    </div>
  );
}
