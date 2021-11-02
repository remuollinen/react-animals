import React, { Component } from "react";
import { animals } from "../animals";
import AnimalCard from "./AnimalCard";

import { Switch, Route } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";

class AnimalList extends Component {
	state = {
		searchInput: "",
	};

	searchInputHandler = (e) => {
		this.setState({
			searchInput: e.target.value,
		});
	};

	render() {
		const filteredAnimals = animals.filter((animal) => {
			return animal.name
				.toLowerCase()
				.includes(this.state.searchInput.toLowerCase());
		});

		const animalslisting = filteredAnimals.map((item) => (
			<AnimalCard key={item.name} name={item.name} />
		));

		return (
			<>
				<Switch>
					<Route exact path={this.props.path}>
						<div className="inputWrapper">
							<input
								type="text"
								onChange={this.searchInputHandler}
								placeholder="Search for an animal"
							/>
						</div>
						{animalslisting}
					</Route>
					<Route path={`${this.props.path}/:animal`}>
						<AnimalSingle />
					</Route>
				</Switch>
			</>
		);
	}
}

export default AnimalList;
