export const InputField = ({handleCityNameChange}) => {
    return (
      <>
          <label></label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={handleCityNameChange}
          />
      </>
    )
}