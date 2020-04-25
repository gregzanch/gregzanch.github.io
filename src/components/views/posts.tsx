import React from "react";

export interface PostsProps {
	visible: boolean;
}

export default function Posts(props: PostsProps) {
	return (
		<div className={props.visible ? "visible" : "hidden"}>
			<div>Posts</div>
		</div>
	);
}
