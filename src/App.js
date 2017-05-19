import React, { Component } from 'react';
import ProductList from './ProductList.js';
import Cart from './Cart.js';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <ProductList/>
        <Cart/>
      </div>
    );
  }
}
