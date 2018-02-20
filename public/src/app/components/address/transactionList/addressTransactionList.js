import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

export default class AddressSearch2 extends React.Component {



  // getAddress() {
  //   console.log('get address');
  // }

  render() {
    return (
      <div>
        <input type="text" name="address" placeholder="Enter Blockchain Address"/>
        <button type="button"></button>
      </div>
    );
  }
}
