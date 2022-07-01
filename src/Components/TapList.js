import React from "react";
import KegListItem from "./KegListItem";
import PropTypes from "prop-types";

function TapList(props) {
	return (
		<React.Fragment>
			{props.kegs.map((keg) => 
				<KegListItem
					keg={keg}
					clickHandler={props.clickHandler}
					key={keg.id}
				/>
			)}
		</React.Fragment>
	);
}

TapList.propTypes = {
	kegs: PropTypes.array,
	clickHandler: PropTypes.func
};

export default TapList;