import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewKegForm(props) {
	function handleNewKegFormSubmission(event) {
    event.preventDefault();
    const newKeg = { 
			name: event.target.name.value,
			brand: event.target.brand.value,
			price: parseFloat(event.target.price.value),
			alcoholContent: parseInt(event.target.alcoholContent.value),
		};

		props.newKegHandler(newKeg);
  }

	return (
		<React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input className="form-control" type='text' name='name' placeholder='Keg Name' />
        <input className="form-control" type='text' name='brand' placeholder='brand name' />
        <input className="form-control" type='number' name='price' placeholder='price' />
				<input className="form-control" type='number' name='alcoholContent' placeholder='% alcohol' />
        <button className="btn btn-success" type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
	);
}

NewKegForm.propTypes = {
	newKegHandler: PropTypes.func.isRequired
};

export default NewKegForm;