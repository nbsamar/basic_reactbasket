import React, { Component } from 'react';
import Cart from '/home/nbsamar/third/src/Cart.js';

export default class ProductFooter extends Component{

	render(){
		return(
			<div className = "col-md-3">
			<h2>{this.props.rate}</h2>
			<input className = "btn btn-success" type="button" value = "Add to Cart" onClick={this.addProd.bind(this)} />
			</div>
			);


	}

	addProd(){
		console.log(this.props.products);
		<Cart added = {this.props.products} />
		//console.log(this.props.products);
		//<Cart added = {this.state.products} />

	}

}