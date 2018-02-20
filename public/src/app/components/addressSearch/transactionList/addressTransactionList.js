import React from 'react';

class AddressTransactionList extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        {this.props.rows}
      </div>
    );
  }
}

export default AddressTransactionList