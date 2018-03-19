import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Todo from './todo.jsx';


const moment = require('moment');

class App extends React.Component {
	state = {
		city: '',
		temp: ''
	};

	componentDidMount() {
		this.fetchWeather();
	}
	fetchWeather = () => {
		axios.get('https://api.apixu.com/v1/forecast.json?key=13087ffb0deb471d8d934851181803&days=5&q=auto:ip')
			.then((response) => {
				this.setState({
					city: response.data.location.name,
					temp: response.data.current.temp_c
				});
			});

	};

	render() {
		let now = new Date()
		return (
			<div id="wrapper" class="body">
				<main>
					<div class="nav">
						<a class="link" href="https://github.com/bumsyalao/chrome-home-page" target="_blank">
							Links
        				</a>
						<div class="weather">
							<p class="weather-style"><i className="mdi mdi-50px mdi-weather-cloudy" />{this.state.temp}&#8451;</p>
							<p class="weather-location">{this.state.city}</p>
						</div>
					</div>
					<div class="section">
						<p class="clock">{moment().format('HH:mm')}</p>
						<h1 class="greet"> Good morning, Bunmi Alao. </h1>
						<div class="center-below">
							<p class="focuses"> What is your main focus for today?</p>
							<input type="text" class="focus">
							</input>
						</div>
					</div>
					<div class="bottom">
						<p class="country"> Lagos, Nigeria </p>
						<p class="quote">“To be beautiful means to be yourself. You don't need to be accepted by others. You need to be yourself.”</p>
						<p class="todo">Todo
						</p>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
