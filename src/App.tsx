import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import House from './components/House';
import Spinner from './components/Spinner';

function App() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API URL
    const url = 'https://wizard-world-api.herokuapp.com/houses';

    // Fetch data from the API
    fetch(url)
      .then((response) => {
        // Check if the fetch was successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON data from the response
      })
      .then((jsonData) => {
        setData(jsonData); // Set the JSON data in state
        setLoading(false); // Set loading to false as we have the data now
      })
      .catch((error) => {
        setError(error.message); // Capture any errors that occur during the fetch
        setLoading(false);
      });
  }, []);

  return (
    <>
      {
        loading ?
          (
            <div className='grid place-items-center h-screen'>
              <Spinner text={'loading...'} />
            </div>
          ) :
          (
            <div className='flex flex-col gap-8 p-10'>
              {
                data.map((item: any, index: number) => (
                  <House name={item.name} animal={item.animal} founder={item.founder} key={index} />
                ))
              }
            </div>
          )
      }
    </>

  );
}

export default App;
