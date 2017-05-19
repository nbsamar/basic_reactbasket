import React, { Component } from 'react';
import ProductCard from './Product/ProductCard.js';

export default class ProductList extends Component{

	constructor(props){
		super(props);

		this.state = {
			products :[{
				"title":"Pen",
				"price":"₹9000",
				"description":"Black Mont Blanc",
				"image":"http://cdn.williampenn.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/noblia_lakshmi_gold_5.jpg",
				"sku": "8000"
			},
			{
				"title":"Watch",
				"price":"₹1000",
				"description":"Fastrack watch",
				"image":"http://cdn.williampenn.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/noblia_lakshmi_gold_5.jpg",
				"sku": "8001"
			},
			{
				"title":"Phone Holder",
				"price":"₹400",
				"description":"Desktop Phone Holder",
				"image":"http://cdn.williampenn.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/noblia_lakshmi_gold_5.jpg",
				"sku": "8002"
			},
			{
				"title":"Mouse",
				"price":"₹900",
				"description":"Dell Mouse",
				"image":"http://cdn.williampenn.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/noblia_lakshmi_gold_5.jpg",
				"sku": "8003"
			},
			{
				"title":"Monitor",
				"price":"₹50000",
				"description":"Apple iMac",
				"image":"http://cdn.williampenn.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/noblia_lakshmi_gold_5.jpg",
				"sku": "8004"
			},
			{
				"title":"Charger",
				"price":"₹1700",
				"description":"HP Charger",
				"image":"http://cdn.williampenn.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/noblia_lakshmi_gold_5.jpg",
				"sku": "8005"
			},
		]

	}

	}

	render(){
		return(
			<div className="col-md-8">
			{this.renderProducts()}
			</div>
			);

	}
	renderProducts(){

		console.log(this.state.products);
		// for(var i=0; i<= this.state.products.length; i++ ){
		// 	var a = this.state.products[i];
		// 	console.log(a);
		// }
		return(this.state.products.map((product) => {
		return(	<ProductCard info = {product}/> )
		}));


	}

}