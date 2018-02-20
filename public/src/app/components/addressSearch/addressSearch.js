import React from 'react';
import Axios from 'axios';
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
    console.log('update query parent')
  }

  getAddressInformation() {
    // TODO: connect with API and update state with information
    console.log('getAddress info');

    this.setState({
      rows: ['data.transaction', 'data.transaction']
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