import React from "react";
import Main from "./components/Main";
import Row from "./components/Row";
import Navbar from "./components/Navbar";
import requests from "./Request";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Row title="Coming soon" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="On High Demand" fetchURL={requests.requestTrending} />
      <Row title="Most Watched" fetchURL={requests.requestTopRated} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default App;
