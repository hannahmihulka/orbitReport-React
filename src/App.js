import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import useState from 'react';
import satData from './components/satData'; 


function App() {
  const [sat, setSat] = useState(satData);
  let displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const filteredSats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats);
  };

  return (
    <div>
      <Banner />
      <Buttons />
      <Table />
    </div>
  );
  }


export default App;
