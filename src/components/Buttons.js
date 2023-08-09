import satData from './satData'; 

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => (
        <button key={id} onClick={() => filterByType(sat)}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>Reset</button>
    </div>
  );
};

export default Buttons;
