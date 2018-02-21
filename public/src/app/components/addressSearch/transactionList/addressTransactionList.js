import React from 'react';

class AddressTransactionList extends React.Component {
  constructor(props) {
    super(props);

	}
	
  render() {
		const transactionList = this.props.transactions.map((transaction) => {
			return (<div>{transaction.ver}</div>)
		});
    return (
      <div>
				<h1>{this.props.finalBalance}</h1>
				{transactionList}
      </div>
    );
  }
}

export default AddressTransactionList