import React from 'react';
import axios from 'axios';
import AddressForm from './form/addressForm';
import AddressTransactionList from './transactionList/addressTransactionList';

export default class AddressSearch extends React.Component {
  constructor() {
    super();
    
    this.state = {
      query: '',
      results: {},
      rows: [1, 2, 3, 4]
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.getAddressInformation = this.getAddressInformation.bind(this);
    
  }

  updateQuery({ target }) {
    this.setState({
      query: target.value
    });
  }

  getAddressInformation() {
    // TODO: connect with API and update state with information
		let baseUrl = '';
		let route = '/get-transactions/'
		let address = this.state.query;

    let response;
    axios.get(route + address)
      .then(res => {
				let data = JSON.parse( res.data.body );
				let finalBalance = data.final_balance;
				let transactions = data.txs;
				// console.log(res.data.body);
				console.log(finalBalance);
				console.log(transactions);

        this.setState({
          rows: res.txs
        });
      });
  }

  render() {


    return (
      <div>
        <AddressForm updateQuery={this.updateQuery} getAddressInformation={this.getAddressInformation}></AddressForm>
        <AddressTransactionList rows={this.state.rows}></AddressTransactionList>
      </div>
    )
  }
}