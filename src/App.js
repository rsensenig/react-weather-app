import logo from './logo.svg';
import './App.css';

function App() {
  const cityList = [
    {
      key: '001',
      englishName: 'Shanghai',
      primaryPostalCode: '200032',
      country: {
        id: 'CHN',
        englishName: 'China'
      },
      administrativeArea: {
        id: 'SH',
        englishName: 'Shanghai Municipality',
        englishType: 'Municipality'
      }
    },
    {
      key: '002',
      englishName: 'Chicago',
      primaryPostalCode: '60290',
      country: {
        id: 'USA',
        englishName: 'United States of Amercia'
      },
      administrativeArea: {
        id: 'IL',
        englishName: 'Illinois',
        englishType: 'State'
      }
    }
  ]
  
  return (
    <div className="App">
      <h1></h1>
      <label></label>
      <input></input>
      <hr></hr>
    </div>
  );
}

export default App;
