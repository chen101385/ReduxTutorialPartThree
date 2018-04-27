import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';



class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const { lon, lat } = cityData.city.coord;
        const tempsInK = cityData.list.map(weather => weather.main.temp)
        const temps = tempsInK.map(K => K*(9/5) - 459.67)
        const humidities = cityData.list.map(weather => weather.main.humidity)
        const pressures = cityData.list.map(weather => weather.main.pressure)

        return (
            <tr key={name}>
                <td><GoogleMap lng={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange" units="F"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humidities} color="blue" units="%"/></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);