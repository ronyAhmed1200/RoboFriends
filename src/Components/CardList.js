import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot, i) => (
    <Card
      key={i}
      id={robots[i].id}
      name={robots[i].name}
      email={robots[i].email}
    />
  ));
  return (
    <div>
      {cardComponent}
      {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
      <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} /> */}
    </div>
  );
};

export default CardList;
