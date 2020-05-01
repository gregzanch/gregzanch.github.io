import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
// import background from './res/cold-leaves-background-blurred.png';
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	IconDefinition
} from '@fortawesome/free-brands-svg-icons'
import {
	faEnvelope,
	faArchive,
	// faGlobe,
	faUser,
	faHome,
	faBookmark
	// faFileAlt,
	// faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import Home from "./components/views/home";
import Contact from "./components/views/contact";
import Projects from "./components/views/projects";
import Resources from "./components/views/resources";
import Posts from "./components/views/posts";

import './App.css';

interface IRouteLink {
	text: string;
	icon?: IconDefinition;
}

function RouteLink(props: IRouteLink) {
	// let containerClassName = "route-link";
	return (
		// <div className={containerClassName}>
			<NavLink
				to={"/" + props.text.toLowerCase()}
				className="icon-link route-link"
				activeClassName="route-link-active"
				id={props.text.toLowerCase()}>
				{props.icon ? (
					<FontAwesomeIcon icon={props.icon} size="sm" />
				) : (
					""
				)}
				<div className="icon-link-text">{props.text}</div>
			</NavLink>
		// </div>
	);
}

function App() {
	return (
		<Router>
			<div className="App">
				<div className="route-links">
					<RouteLink text="Home" icon={faHome} />
					<RouteLink text="Projects" icon={faArchive} />
					<RouteLink text="Posts" icon={faBookmark} />
					{/* <RouteLink text="Resources" icon={faGlobe} /> */}
					<RouteLink text="Contact" icon={faUser} />
				</div>

				<div className="view-wrapper">
					<Switch>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/projects">
							<Projects />
						</Route>
						<Route path="/posts">
							<Posts />
						</Route>
						{/* <Route path="/resources">
							<Resources />
						</Route> */}
					</Switch>
				</div>

				<div className="connect">
					<a
						href="mailto:zanchelli.greg@gmail.com"
						className="icon-link"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon icon={faEnvelope} size="1x" />
					</a>
					<a
						href="https://github.com/gregzanch"
						className="icon-link"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} size="1x" />
					</a>
					<a
						href="https://www.linkedin.com/in/greg-zanchelli-40268a190/"
						className="icon-link"
						target="_blank"
						rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedin} size="1x" />
					</a>
				</div>
			</div>
		</Router>
	);
}

export default App;
