import React from "react";

export interface HomeProps{
	visible: boolean;
}

export default function Home(props: HomeProps) {
	return (
		<div className={props.visible ? "visible" : "hidden"}>
			<div className="brief">
				<div className="name">Greg Zanchelli</div>
				<div className="pipe">|</div>
				<div className="desc">acoustical engineer, developer, maker</div>
			</div>
		</div>
  ); 
}