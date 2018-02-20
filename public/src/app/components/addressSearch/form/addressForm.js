import React from 'react';
import './addressForm.css';


class AddressForm extends React.Component {

  constructor(props){
    super(props);
    
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery({target}){
    this.props.updateQuery({target})
  }

  render() {
    return (
      <div className="address-search">
        <input type="text" name="address" placeholder="Enter Blockchain Address" onChange={this.updateQuery}/>
        <button type="button" onClick={this.props.getAddressInformation}>Give me the info</button>
      </div>
    );
  }
}

export default AddressForm;

