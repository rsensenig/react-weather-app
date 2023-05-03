import React, { useState } from 'react';
import './App.css';
import { InputField } from './components/shared/InputField';
import { CityItem } from './components/CityItem';

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

  const [cityName, setCityName] = useState(null);
  
  const handleCityNameChange = (event) => {
    setCityName(event.target.value);
    console.log(event.target.value);
  };

  const handleCityDisplay = (city) => {
    console.log(`You selected ${city.englishName}`);
  }

  return (
    <div className="App">
      <h1></h1>
      <InputField
        handleCityNameChange={handleCityNameChange}
      />
      <hr></hr>
      <CityItem 
        cityList={cityList}
        handleCityDisplay={handleCityDisplay}
      />
    </div>
  );
}

export default App;
