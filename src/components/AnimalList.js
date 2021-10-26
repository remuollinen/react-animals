import React from "react";
import AnimalCard from "./AnimalCard";
import { animals } from "../animals";

function AnimalList() {
	return (
		<>
			{animals.map((animal) => (
				<AnimalCard key={animal.name} name={animal.name} />
			))}
		</>
	);
}

export default AnimalList;
