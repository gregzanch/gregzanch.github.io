import React from "react";
import "./card.css";

export interface CardProps {
  children?: React.ReactNodeArray
}

export default function Card(props: CardProps) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}
