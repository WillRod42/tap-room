import React from "react";
import TapList from "./TapList";
import Details from "./Details";
import NewKegForm from "./NewKegForm";

const startingKegs = [
  {
		id: 0,
		name: "Wheat-y Beer",
		brand: "ACME",
		price: 5.00,
		alcoholContent: 6,
		quantity: 124
  },
	{
		id: 1,
		name: "Hard Lemonade",
		brand: "ACME",
		price: 5.50,
		alcoholContent: 8,
		quantity: 124
  },
	{
		id: 2,
		name: "Hard Cider",
		brand: "ACME",
		price: 7.50,
		alcoholContent: 11,
		quantity: 124
  }
];

class TapControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			kegFormVisible: false,
			kegDetails: <Details
				keg={startingKegs[0]}
				clickHandler={this.pourDrink}
			/>,
			kegs: startingKegs
		};
	}

	toggleForm = () => {
    this.setState(prevState => ({
			kegFormVisible: !prevState.kegFormVisible
		}));
  }

	selectKeg = (keg) => {
		this.setState({ 
			kegDetails: <Details
				keg={keg}
				clickHandler={this.pourDrink}
			/>
		});
	}

	pourDrink = (kegId) => {
		let newKegs = this.state.kegs;
		newKegs[kegId].quantity--;
		if (newKegs[kegId].quantity < 0)
		{
			newKegs[kegId].quantity = 0;
		}

		this.setState({ kegs: newKegs });
		this.selectKeg(this.state.kegDetails.props.keg);
	}

	addNewKeg = (newKeg) => {
		newKeg.id = this.state.kegs.length;
		newKeg.quantity = 124;
		
		const newKegList = this.state.kegs.concat(newKeg);
		this.setState({ 
			kegs: newKegList ,
			kegFormVisible: false,
		});
	}

	render() {
		let buttonText = "Create New Keg";
		let visibleComponent = this.state.kegDetails;
		if (this.state.kegFormVisible) {
			visibleComponent = <NewKegForm newKegHandler={this.addNewKeg} />
			buttonText = "Show Details";
		}

		return (
			<React.Fragment>
				<div className="row">
					<div className="col-6">
						<TapList kegs={this.state.kegs} clickHandler={this.selectKeg} />
						<button className="btn btn-primary" onClick={this.toggleForm}>{buttonText}</button>
					</div>
					<div className="col-6">
						{visibleComponent}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default TapControl;