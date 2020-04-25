import React from "react";

export interface AboutProps {
	visible: boolean;
}

export default function About(props: AboutProps) {
	return (
		<div className={props.visible ? "visible" : "hidden"}>
			<div>about</div>
		</div>
	);
}
