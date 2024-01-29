import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App';

describe('index component', () => {
	it('render root component.', () => {
		const component = <App />;
		const container = document.createElement('div');
		container.setAttribute('id', 'root');
		document.body.appendChild(container);

		const root = createRoot(container);
		root.render(component);

		expect(document.body.firstChild).toEqual(container);
	});
});
