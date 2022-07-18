import React from 'react';
import City from './City';
import { connect } from 'react-redux';

import { cityDataSelector, isFetchingSelector } from './weather.selector';
import { fetchCityData } from './weather.actions';

class Weather extends React.Component {
  componentDidMount() {
    this.props.fetchCityData();
  }

  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.props.weatherData.map(city => (
            <City key={city.id} {...city} />
          ))}
        </ul>
      </main>
    );
  }
}

const mapDispatch = {
  fetchCityData,
};
const mapState = state => {
  return {
    weatherData: cityDataSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Weather);
