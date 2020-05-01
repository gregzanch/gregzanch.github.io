import React from "react";
import "./card.css";

export interface CardProps {
  children?: React.ReactNode | React.ReactNode[];
  link?: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <a className="no-link" target="_blank" href={props.link || "#"}>{props.children}</a>
    </div>
  );
}
