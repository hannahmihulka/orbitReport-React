import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import React, {useState} from 'react';
import satData from './components/satData'; 


function App() {
  let [sat, setSat] = useState(satData);
  let displaySats = [...new Set(satData.map((data) => data.orbitType))];

  let filterByType = (currentType) => {
    let filteredSats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats);
  };

  return (
    <div>
      <Banner />
      <Buttons displaySats={displaySats} filterByType={filterByType} setSat={setSat} />
      <Table sat={sat}/>
    </div>
  );
  }


export default App;
