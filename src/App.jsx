import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Home from "#/Home.jsx";

import "#/reset.css";

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href="https://www.twosome.co.kr/resources/images/common/favicon_.ico" />
        <title>투썸플레이스 - Premium Dessert cafe A Twosome Place.</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;