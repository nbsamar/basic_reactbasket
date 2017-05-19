import React, { Component } from 'react';
import ProductDetail from './ProductDetail.js';
import ProductFooter from './ProductFooter.js';

export default class ProductCard extends Component{

	render(){
		console.log(this.props.info);
		return(
			
			<div className = "row">
				<h2 style={{'color':'pink'}}>{this.props.info.title}</h2>
				<ProductDetail details = {this.props.info.description}/>
				<ProductFooter rate = {this.props.info.price}/>
			</div>

			);

	}

}