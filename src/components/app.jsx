import React from 'react';
import ReactDOM from 'react-dom';
import Time from 'react-time';
import ReactWeather from 'react-open-weather';
import todos from './todo.jsx';


const STORE_KEY = 'USE_DARK_MODE';

class App extends React.Component {
	state = {
		checkedInput: false
	};

	componentWillMount() {
		if (typeof localStorage !== 'undefined') {
			const checked = localStorage.getItem(STORE_KEY) || false;
			this.setState({ checkedInput: JSON.parse(checked) });
		}
	}

	render() {
		let now = new Date("Sun Mar 18 2018 03:22:59 GMT+0100")
		return (
			<div id="wrapper" class="body">
				<main>
					<div class="nav">
						<a class="link">
							Link
        				</a>
						<div class="weather">
							<ReactWeather
								forecast="today"
								apikey="13087ffb0deb471d8d934851181803"
								type="auto"
							/>
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
						<p class="todo">Todo</p>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
