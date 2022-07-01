import React from "react";
import PropTypes from "prop-types";

function Details(props) {
	return (
		<React.Fragment>
			<ul className="list-group">
				<li className="list-group-item">{props.keg.name}</li>
				<li className="list-group-item">{props.keg.brand}</li>
				<li className="list-group-item">${props.keg.price.toFixed(2)} / pint</li>
				<li className="list-group-item">{props.keg.alcoholContent}% alcohol</li>
				<li className="list-group-item">{props.keg.quantity} Pints Left</li>
			</ul>
			<button className="btn btn-primary" onClick={() => {props.clickHandler(props.keg.id);}}>Pour Drink</button>
		</React.Fragment>
	);
}

Details.propTypes = {
	keg: PropTypes.object,
	clickHandler: PropTypes.func
};

export default Details;