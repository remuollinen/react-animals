import React from "react";

function AnimalCard(props) {
	return (
		<div className="card">
			<h3>{props.name}</h3>
			<img
				src={`https://source.unsplash.com/200x200/?${props.name}`}
				alt={props.name}
			/>
		</div>
	);
}

export default AnimalCard;
