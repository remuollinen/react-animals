import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Main />
				<Footer />
			</>
		);
	}
}

export default App;
