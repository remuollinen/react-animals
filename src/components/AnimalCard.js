import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

function AnimalCard(props) {
	let match = useRouteMatch();

	return (
		<Link to={`${match.url}/${props.name}`} className="animal-link">
			<div className="card">
				<img
					src={`https://source.unsplash.com/1600x900/?${props.name}`}
					alt={props.name}
				/>
				<h3>{props.name.replace("-", " ")}</h3>
			</div>
		</Link>
	);
}

export default AnimalCard;
