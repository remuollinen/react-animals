import React from "react";
import AnimalCard from "./AnimalCard";
import { animals } from "../animals";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";

function AnimalList() {
	const match = useRouteMatch();

	const animalsListing = animals.map((animal) => (
		<AnimalCard key={animal.name} name={animal.name} />
	));

	return (
		<>
			<Switch>
				<Route exact path={`${match.path}`}>
					{animalsListing}
				</Route>
				<Route path={`${match.path}/:animal`}>
					<AnimalSingle />
				</Route>
			</Switch>
		</>
	);
}

export default AnimalList;
