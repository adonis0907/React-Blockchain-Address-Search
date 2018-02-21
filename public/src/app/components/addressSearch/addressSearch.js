import React from 'react';
import axios from 'axios';
import AddressForm from './form/addressForm';
import AddressTransactionList from './transactionList/addressTransactionList';
import ApiManagerAddress from '../../services/api/apiManagerAddress';

export default class AddressSearch extends React.Component {
	constructor() {
		super();

		this.state = {
			query: '',
			finalBalance: 0,
			transactions: [],
		}
		this.updateQuery = this.updateQuery.bind(this);
		this.getAddressInformation = this.getAddressInformation.bind(this);
		this.updateSocket = this.updateSocket.bind(this);
	}

	updateSocket(){
		let socket = new WebSocket("wss://ws.blockchain.info/inv");
		let address = this.state.query;

		socket.onopen = function onOpen(evt) {
			// websocket.send(JSON.stringify({ "op": "addr_unsub", "addr": "1Kr6QSydW9bFQG1mXiPNNu6WpJGmUa9i1g" }));
			socket.send(JSON.stringify({ 
				"op": "addr_sub", 
				"addr": address
			}));
			console.log('subscribed to address');
			console.log(evt);
		};

		socket.onmessage = function (message) {
			var transaction = JSON.parse(message.data).x;
			
			transactions = this.state.transactions;
			transactions.pop()
			transactions = transactions.push(transaction);

			this.setState({
				transactions: transactions
			})
		}
	}


	updateQuery({ target }) {
		this.setState({
			query: target.value
		});

		this.updateSocket();
	}

	getAddressInformation() {
		let address = this.state.query;

		ApiManagerAddress.get(address, (res) => {
			let data = JSON.parse(res.data.body);
			console.log(data.txs)
			this.setState({
				finalBalance: data.final_balance,
				transactions: data.txs
			});
		});
	}

	render() {
		return (
			<div>
				<AddressForm updateQuery={this.updateQuery} getAddressInformation={this.getAddressInformation}></AddressForm>
				{this.state.transactions.length > 0 
					? <AddressTransactionList transactions={this.state.transactions} finalBalance={this.state.finalBalance}></AddressTransactionList>
					: null
				}				
			</div>
		)
	}
}