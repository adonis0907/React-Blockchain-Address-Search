import axios from 'axios';

class ApiManagerAddress {
  constructor(){}

  // TODO: add params
  static get(address, cb){
		let baseUrl = '';
		let route = '/get-transactions/'

		axios.get(route + address)
			.then(res => {
				cb(res);
			});
  }
}


export default ApiManagerAddress;