import React from 'react';
import ReactDOM from 'react-dom';
import AddressSearch from './components/addressSearch/addressSearch';
import { Grid, Row, Col } from "react-bootstrap";

ReactDOM.render(
	<div>
		<Grid>
			<div>My App</div>
			<p>Blockchain Address: 1DkyBEKt5S2GDtv7aQw6rQepAvnsRyHoYM</p>
			<AddressSearch></AddressSearch>
		</Grid>
	</div>,
	document.getElementById('root')
);