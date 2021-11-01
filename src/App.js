import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/animals" component={Main}></Route>
					<Route path="/about" component={About}></Route>
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
