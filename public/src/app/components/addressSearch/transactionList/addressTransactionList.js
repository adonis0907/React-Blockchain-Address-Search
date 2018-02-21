import React from 'react';
import './addressTransactionList.css';

class AddressTransactionList extends React.Component {
  constructor(props) {
    super(props);

	}
	
  render() {
		let transactionList = this.props.transactions.map((transaction, index) => {
			// TODO: Move to Util Service
			let txTime = parseInt( transaction.time + '000' );

			let time = new Date(txTime).toString(); // The 0 there is the key, which sets the date to the epoch
	
			// TODO: create TransactionRow Component
			return (
				<tr key={index}>
					<td>{transaction.block_height}</td>
					<td>{transaction.hash}</td>
					<td>{time}</td>
					<td>{transaction.size} bytes</td>
					<td>{transaction.weight}</td>
				</tr>
			)
		});

		// TODO: Move to Util Service
		let moveDecimal = (n) => {
			var amt = 2 - n.toString().length;
			var l = n.toString().length+amt;
			var v = n/Math.pow(10, l);
			return v;
		}

		let digitsArr = this.props.finalBalance.toString().split('');
		let rightArr = digitsArr.slice(Math.max(digitsArr.length - 6, 1)).join('')
		let leftArr = digitsArr.slice(0, Math.max(digitsArr.length - 6)).join('');
		let rightInt = parseInt(rightArr)
		let leftInt = moveDecimal(leftArr)

    return (
      <div>
				<h4>Final Balance: {leftInt}<span> {rightInt}</span> BTC</h4>
				<table>
					<tbody>
						<tr>
							<th>Block</th>
							<th>Hash</th>
							<th>Time</th>
							<th>Size</th>
							<th>Weight</th>
						</tr>
						{transactionList}
					</tbody>
				</table>
      </div>
    );
  }
}

export default AddressTransactionList