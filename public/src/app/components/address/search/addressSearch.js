import React from 'react';
import './addressSearch.css';


class AddressSearch extends React.Component {

  constructor(){
    super();
    this.setState({query: ''})
  }

  getAddress() {
    console.log('get address');
  }

  render() {
    return (
      <div className="address-search">
        <input type="text" name="address" placeholder="Enter Blockchain Address"/>
        <button type="button">Give me the info</button>
      </div>
    );
  }
}

export default AddressSearch;

