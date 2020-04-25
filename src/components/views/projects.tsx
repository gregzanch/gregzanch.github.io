import React from "react";

export interface ProjectsProps {
	visible: boolean;
}

export default function Projects(props: ProjectsProps) {
	return (
		<div className={props.visible ? "visible" : "hidden"}>
			<div>Projects</div>
		</div>
	);
}
