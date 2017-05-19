import React, { Component } from 'react';


export default class ProductDetails extends Component{

	render(){
		return(
			<div className = "col-md-3">
			<h2>{this.props.details}</h2>
			</div>
			);

	}

}