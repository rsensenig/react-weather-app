export const CityItem = ({ cityList, handleCityDisplay}) => {
    return (
        cityList.map(city => (
            <ul key={city.key}>
                <li>
                    <button type='button' onClick={() => handleCityDisplay(city)}>{city.englishName}</button>
                </li>
            </ul>
        ))
    )
}