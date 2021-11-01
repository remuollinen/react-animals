import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

function AnimalCard(props) {
	let match = useRouteMatch();

	return (
		<Link to={`${match.url}/${props.name}`} className="animal-link">
			<div className="card">
				<h3>{props.name.replace("-", " ")}</h3>
				<img
					src={`https://source.unsplash.com/200x200/?${props.name}`}
					alt={props.name}
				/>
			</div>
		</Link>
	);
}

export default AnimalCard;
