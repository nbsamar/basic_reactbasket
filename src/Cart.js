import React, { Component } from 'react';
import ProductList from './ProductList.js'

export default class Cart extends Component{

	render(){
		return(
			<div className="col-md-4">
			<h1>Cart</h1>
			<h2>{this.props.added}</h2>
			</div>
			);

	}

}