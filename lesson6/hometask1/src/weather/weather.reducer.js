import { fetchCityData, WEATHER_DATA_RECIEVED, WEATHER_DATA_STARTED } from './weather.actions';
const initialData = {
  weatherData: [],
};
const weatherReducer = (state = initialData, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECIEVED:
      return {
        ...state,
        weatherData: action.weatherData,
      };
    default:
      return state;
  }
};
export default weatherReducer;
