import React from "react";
import ReactDom from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <div>
      <div className="card-group">
        <Collapse href="collapseExample1">
          <Card
            cardTitle="Card Title 1"
            cardText="Lorem upsum veseakfff"
            updateTime=" Last updated 2 min ago"
            image="https://picsum.photos/id/231/200/300"
          />
        </Collapse>

        <Collapse href="collapseExample2">
          <Card
            cardTitle="Card Title 2"
            cardText="Lorem upsum veseakggg"
            updateTime=" Last updated 4 min ago"
            image="https://picsum.photos/id/239/200/300"
          />
        </Collapse>

        <Collapse href="collapseExample3">
          <Card
            cardTitle="Card Title 3"
            cardText="Lorem upsum veseaksasa"
            updateTime=" Last updated 1 min ago"
            image="https://picsum.photos/id/235/200/300"
          />
        </Collapse>
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
