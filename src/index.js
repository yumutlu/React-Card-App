import React from "react";
import ReactDom from "react-dom";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-group w-100">
            <div className="col">
              <Collapse href="collapseExample1">
                <Card
                  cardTitle="Card Title 1"
                  cardText="Lorem upsum veseakfff"
                  updateTime=" Last updated 12 min ago"
                  image="https://picsum.photos/id/231/200/300"
                />
              </Collapse>
            </div>
            <div className="col">
              <Collapse href="collapseExample2">
                <Card
                  cardTitle="Card Title 2"
                  cardText="Lorem upsum veseakfff"
                  updateTime=" Last updated 21 min ago"
                  image="https://picsum.photos/id/234/200/300"
                />
              </Collapse>
            </div>
            <div className="col">
              <Collapse href="collapseExample3">
                <Card
                  cardTitle="Card Title 3"
                  cardText="Lorem upsum veseakfff"
                  updateTime=" Last updated 1 min ago"
                  image="https://picsum.photos/id/232/200/300"
                />
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
