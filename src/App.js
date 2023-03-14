import logo from './logo.svg';
import './App.css';

function App() {
  const locationList = [
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
      
    </div>
  );
}

export default App;
