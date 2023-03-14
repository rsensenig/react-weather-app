export const CityItem = (props) => {
    return (
        props.cityList.map(city => (
            <ul key={city.id}>
                <li>Name:{city.englishName}</li>
                <li>Administrative Area:{city.administrativeArea.id}</li>
                <li>Country:{city.country.id}</li>
            </ul>
        ))
    )
}