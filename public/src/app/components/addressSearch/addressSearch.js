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
    const baseUrl = 'https://blockchain.info/';
    let addressQuery = '/rawaddr/' + this.state.query;
    let response;
    axios.get(baseUrl + addressQuery)
      .then(res => {
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