import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import "./App.css";

// import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Architecture from "./components/Architecture";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import Concept from "./components/Concept";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "https://res-gw-4tszy005.ew.gateway.dev/index";

const App = () => {
  const [v_count, setVCount] = useState("");
  const [page_count, setPageCount] = useState("");

  useEffect(() => {
    async function getVisitorCount() {
      try {
        const res = await axios.post(`${API_URL}`);
        setVCount(res.data.v_count || "");
        setPageCount(res.data.page_count || "");
      } catch (error) {
        console.log(error);
      }
    }
    getVisitorCount();
  }, []);

  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route
            path="/personal"
            element={<Personal v_count={v_count} page_count={page_count} />}
          />
        </Routes>
      </Header>
    </BrowserRouter>
  );
};

export default App;
