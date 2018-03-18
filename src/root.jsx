import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import 'scss/style.scss';

const rootElement = document.querySelector('#main');

ReactDOM.render(<App />, rootElement);

if (module.hot) {
	module.hot.accept(App, () => {
		ReactDOM.render(<App />, rootElement);
	});
}
