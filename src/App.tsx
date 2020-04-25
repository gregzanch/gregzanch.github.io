import React, { useState } from 'react';
import background from './res/cold-leaves-background-blurred.png';
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
	faGlobe,
	faUser,
	// faFileAlt,
	faBookmark
	// faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import Home from "./components/views/home";
import About from "./components/views/about";
import Projects from "./components/views/projects";
import Resources from "./components/views/resources";
import Posts from "./components/views/posts";

import './App.css';

interface IRouteLink {
	text: string;
	icon?: IconDefinition;
	onClick: (e: React.MouseEvent) => void;
}

function RouteLink(props: IRouteLink) {
	return (
		<div className="route-link">
			<button className="icon-link" id={props.text.toLowerCase()} onClick={props.onClick}>
				{props.icon ? <FontAwesomeIcon icon={props.icon} size="sm" /> : ""}
				<div className="icon-link-text">{props.text}</div>
			</button>
		</div>
	);
}

function App() {
	const [view, setView] = useState("home");
	const routeLinkHander = (e: React.MouseEvent) => {
		setView(e.currentTarget.id || "home");
	}
  return (
		<div className="App">
			<img
				src={background}
				alt="cold-leaves"
				className="background-image"
			/>

			<div className="route-links">
				<RouteLink
					text="About"
					icon={faUser}
					onClick={routeLinkHander}
				/>
				<RouteLink
					text="Projects"
					icon={faArchive}
					onClick={routeLinkHander}
				/>
				<RouteLink
					text="Posts"
					icon={faBookmark}
					onClick={routeLinkHander}
				/>
				<RouteLink
					text="Resources"
					icon={faGlobe}
					onClick={routeLinkHander}
				/>
			</div>
			<div className="view-wrapper">
				<Home visible={view === "home"} />
				<About visible={view === "about"} />
				<Projects visible={view === "projects"} />
				<Posts visible={view === "posts"} />
				<Resources visible={view === "resources"} />
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
  );
}

export default App;
