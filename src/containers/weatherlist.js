import React , { Component } from 'react';

import {connect} from 'react-redux';
import Chart from '../components/chart';
import {Sparklines,SparklinesLine} from 'react-sparklines';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

	renderWeather(citydata){

		const name=citydata.city.name;
		const temps=citydata.list.map(weather => weather.main.temp);
		const pressures=citydata.list.map(weather => weather.main.pressure);
		const humidities=citydata.list.map(weather => weather.main.humidity);
		console.log(temps);

		const {lon,lat}=citydata.city.coord;

		return(
			<tr key={name}>
			<td><GoogleMap lon={lon} lat={lat} /></td>
			<td><Chart data={temps} color="cyan" units="K"  /></td>
			<td><Chart data={pressures} color="black" units="hPa"  /></td>
			<td><Chart data={humidities} color="orange" units="%" /></td>
			</tr>
			);

	}
	render(){
		return(
				<table className='table table-hover'>
				<thead>
				<tr>
				<th> City </th>
				<th> Temperature </th>
				<th> Pressure </th>
				<th> Humidity </th>
				</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}

				</tbody>
				</table>
			);
	}
}

function mapStateToProps({weather}){
	return { weather };//{weather:weather}
}

export default connect (mapStateToProps)(WeatherList);