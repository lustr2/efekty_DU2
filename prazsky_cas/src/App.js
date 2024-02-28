import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [dateTime, setDateTime] = useState('2020-11-13T22:46');
  const [timeZone, setTimeZone] = useState('Europe/Prague');
  const api = "https://worldtimeapi.org/api/timezone/";
  const zones = [{zone: "America/New_York", popis : 'New_York'},
                 {zone: "Europe/London", popis  : 'Londýn'},
                 {zone: "Europe/Moscow", popis  : 'Moskva'},
                 {zone: "Europe/Prague", popis  : 'Praha'},
                 {zone: "Asia/Hong_Kong", popis  : 'Hong Kong'},
                 {zone: "Asia/Jerusalem", popis  : 'Jeruzalém'}];

  const handleDateTime = (event) => {
    setDateTime(event.target.value);
  }

  const handleChangeZone = (event) => {
    setTimeZone(event.target.value);
//    alert("Zmena time zony ..." + timeZone);
  }

  useEffect(() => {
  
    let zona = api + timeZone;

    const fetchPragueTime = async () => {
      const response = await fetch(zona);
      const data = await response.json();
      setDateTime(data);
 //     alert("Nacitame ....");
    }
    fetchPragueTime();

  } , [timeZone]);

  return (
    <>
    <h2 align="center"> Domácí úkol - Pražský čas a výběr zóny</h2>
    <form>
      <div className="App">
        <label onChange={handleDateTime}>
          Čas v oblasti <b>{timeZone}</b> : 
        </label>
        <label className='label_text'>
          {dateTime.datetime}
          
          
        </label>
      </div>
      <div>
        <label>
        Vyberte zónu :
        <select className="vyber_zony" onChange={handleChangeZone} defaultValue={timeZone}>
          {zones.map(z => <option value={z.zone} key={z.zone}>{z.popis}</option>)}
          {/* <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option> */}
        </select>
      </label>
      </div>
    </form>
    </>
  );
}

export default App;
