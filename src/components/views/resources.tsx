import React from "react";

export interface ResourcesProps {
	visible: boolean;
}

export default function Resources(props: ResourcesProps) {
	return (
		<div className={props.visible ? "visible" : "hidden"}>
			<div>Resources</div>
		</div>
	);
}
