import React from "react";
import { useParams, useHistory } from "react-router-dom";

function AnimalSingle() {
	let { animal } = useParams();
	let history = useHistory();

	return (
		<div className="animal-single">
			<h2>This is the page for {animal.replace("-", " ")}</h2>
			<div className="image-wrapper">
				<img
					src={`https://source.unsplash.com/1600x900/?${animal}`}
					alt={animal}
				/>
			</div>
			<div>
				<button onClick={() => history.goBack()}>
					Back to list of animals
				</button>
			</div>
		</div>
	);
}

export default AnimalSingle;
