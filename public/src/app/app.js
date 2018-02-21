import React from 'react';
import ReactDOM from 'react-dom';
import AddressSearch from './components/addressSearch/addressSearch';
import './app.css';

ReactDOM.render(
	<div>
		<div className="app container">
			<h1 className="header">Blockchain Address Query API</h1>

			<p>Blockchain Address: 1DkyBEKt5S2GDtv7aQw6rQepAvnsRyHoYM</p>
			<p>Limited query to 10 transactions, and socket will start listening and adding new transactions onSearch</p>
			<AddressSearch></AddressSearch>
		</div>
	</div>,
	document.getElementById('root')
);