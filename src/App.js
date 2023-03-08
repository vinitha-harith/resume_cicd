import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import "./App.css";
// import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Architecture from "./components/Architecture";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
// import Concept from "./components/Concept";
import Home from "./components/Home";

// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "https://res-gw-4tszy005.ew.gateway.dev/index";
const SRVC_URL = "https://vinitha.info/geo";

const App = () => {
  const [v_count, setVCount] = useState("");
  const [page_count, setPageCount] = useState("");
  // const [geo, setGeo] = useState("");
  let initialized = false;

  useEffect(() => {
    if (!initialized) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      initialized = true;
      async function getVisitorCount() {
        try {
          const res = await axios.post(`${API_URL}`);
          setVCount(res.data.v_count || "");
          setPageCount(res.data.page_count || "");
          // console.log(res.data);
        } catch (error) {
          console.log(error);
        }

        try {
          // eslint-disable-next-line no-unused-vars
          const res_g = await axios.get(`${SRVC_URL}`);
          // console.log(res_g.data);
        } catch (error) {
          console.log(error);
        }
      }
      getVisitorCount();
    }
  }, []);

  // useEffect(() => {
  //   async function getVisitorGeo() {
  //     try {
  //       const res_g = await axios.get(`${SRVC_URL}`);
  //       setGeo(res_g.data || "");
  //       console.log(res_g.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getVisitorGeo();
  // }, []);

  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route
            path="/personal"
            element={<Personal v_count={v_count} page_count={page_count} />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
};

export default App;
