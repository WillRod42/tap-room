import React from "react";
import PropTypes from "prop-types";

function KegListItem(props) {
	return (
			<div onClick={() => props.clickHandler(props.keg)} className="row keg-list-item">
				<div className="col-3">
					<p>{props.keg.name}</p>
				</div>
				<div className="col-3">
					<p>{props.keg.brand}</p>
				</div>
				<div className="col-3">
					<p>${props.keg.price.toFixed(2)}</p>
				</div>
				<div className="col-3">
					<p>{props.keg.alcoholContent}%</p>
				</div>
			</div>
	);
};

KegListItem.propTypes = {
	keg: PropTypes.object,
	clickHandler: PropTypes.func
};

export default KegListItem;