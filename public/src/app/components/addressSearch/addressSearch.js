import React from 'react';
import axios from 'axios';
import AddressForm from './form/addressForm';
import AddressTransactionList from './transactionList/addressTransactionList';

export default class AddressSearch extends React.Component {
  constructor() {
    super();
    
    this.state = {
      query: '',
			finalBalance: 0,
      transactions: []
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
    // TODO: Create API Manager and move logic there
		let baseUrl = '';
		let route = '/get-transactions/'
		let address = this.state.query;

    axios.get(route + address)
      .then(res => {
				let data = JSON.parse( res.data.body );
				console.log(res);
				console.log(data.txs);
        this.setState({
					finalBalance: data.final_balance,
          transactions: data.txs
				});
				
				console.log(this.state.transactions);
      });
  }

  render() {
    return (
      <div>
        <AddressForm updateQuery={this.updateQuery} getAddressInformation={this.getAddressInformation}></AddressForm>
        <AddressTransactionList transactions={this.state.transactions} finalBalance={this.state.finalBalance}></AddressTransactionList>
      </div>
    )
  }
}