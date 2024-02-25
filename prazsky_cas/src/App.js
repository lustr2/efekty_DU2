import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
  
    const fetchPragueTime = async () => {
      const response = await fetch('https://worldtimeapi.org/api/timezone/Europe/Prague');
      const data = await response.json();
      setDateTime(data);
 //     alert("Nacitame ....");
    }
    fetchPragueTime();

  } , []);
  return (
    <div className="App">
      Prague time : 
        {dateTime.datetime}
    </div>
  );
}

export default App;
