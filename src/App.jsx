import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/jokes') // Use http instead of https for localhost
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }); // Ensure useEffect runs only once on component mount

  return (
    <>
      <h2>Full Stack Application Connectivity Revision</h2>
      <p>Jokes: {jokes.length}</p>

      {/* Corrected the map function to return JSX */}
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h2>{joke.author}</h2>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
