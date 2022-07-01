import React from "react";
import PropTypes from "prop-types";

function KegListItem(props) {
	const price = Math.round((props.price + Number.EPSILON) * 100) / 100;
	const alcoholContent = Math.round((props.alcoholContent + Number.EPSILON));

	return (
		<div className="row keg-list-item">
			<div className="col-3">
				<p>{props.name}</p>
			</div>
			<div className="col-3">
				<p>{props.brand}</p>
			</div>
			<div className="col-3">
				<p>${price}</p>
			</div>
			<div className="col-3">
				<p>{alcoholContent}%</p>
			</div>
		</div>
	);
};

KegListItem.propTypes = {
	name: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	alcoholContent: PropTypes.number.isRequired
};

export default KegListItem;