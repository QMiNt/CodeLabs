import React from "react";
import Card from "../components/UI/Card";

const Algorithms = () => {
  return (
    <div className="row">
      <Card
        title="Binary Search"
        link="/visualize/binarysearch"
        img=""
        desc=""
      />
      <Card title="Prime" link="/visualize/prime" img="" desc="" />
      <Card title="N-Queens" link="/visualize/nqueens" img="" desc="" />
      <Card title="Sorting" link="/visualize/sort" img="" desc="" />
      <Card title="Graph" link="/visualize/graph" img="" desc="" />
      <Card title="Puzzle" link="/visualize/puzzle" img="" desc="" />
      <Card title="Turing Machine" link="/visualize/turing" img="" desc="" />
      <Card title="Convex Hull" link="/visualize/convexhull" img="" desc="" />
      <Card title="Path Finder" link="/visualize/pathfinder" img="" desc="" />
      <Card
        title="Recursive Sort"
        link="/visualize/recursivesort"
        img=""
        desc=""
      />
    </div>
  );
};

export default Algorithms;
