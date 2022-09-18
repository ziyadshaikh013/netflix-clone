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
      <Row rowId="1" title="Coming soon" fetchURL={requests.requestUpcoming} />
      <Row rowId="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row
        rowId="3"
        title="On High Demand"
        fetchURL={requests.requestTrending}
      />
      <Row rowId="4" title="Most Watched" fetchURL={requests.requestTopRated} />
      <Row rowId="5" title="Horror" fetchURL={requests.requestHorror} />
    </>
  );
};

export default App;
