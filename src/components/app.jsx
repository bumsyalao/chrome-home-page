import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Todo from './todo.jsx';


class App extends React.Component {
		state = {
			city: '',
			temp: ''
		};
		
	componentDidMount(){
		this.fetchWeather();
	}
	fetchWeather = () => {
		axios.get('https://api.apixu.com/v1/forecast.json?key=13087ffb0deb471d8d934851181803&days=5&q=auto:ip')
		.then((response) => {
			console.log(response)
			this.setState({
				city: response.data.location.name,
				temp: response.data.current.temp_c
			});
		});
		
	};

	render() {
		console.log(this.state);
		let now = new Date("Sun Mar 18 2018 03:22:59 GMT+0100")
		return (
			<div id="wrapper" class="body">
				<main>
					<div class="nav">
						<a class="link">
							Link
        				</a>
						<div class="weather">
							<p>{this.state.city}</p>
							<p>{this.state.temp}</p>
						</div>
					</div>
					<div class="section">
						<p class="clock">00:20</p>
						<h1 class="greet"> Good Morning, Bunmi Alao. </h1>
						<div class="center-below">
							<p class="focuses"> What is your main focus for today?</p>
							<input type="text" class="focus">
							</input>
						</div>
					</div>
					<div class="bottom">
						<p class="country"> Lagos, Nigeria </p>
						<p class="quote">“To be beautiful means to be yourself. You don't need to be accepted by others. You need to be yourself.”</p>
						<p class="todo">
							<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
								Todo
  							</button>
						</p>
						<div class="collapse" id="collapseExample">
							<div class="card card-body">
								<Todo />
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
