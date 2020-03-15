import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Homepage, TOC, Tools, Books, Lessons, Blogs, IAQ } from "./Pages/index"
import { NavBar, Foot } from "../src/Components/index";

function App() {
  const [route, changeRoute] = useState({
    page: "tools",
    action: ""
  });
  const page = route.page;
  const home = page === "home";
  const lessons = page === "lessons";
  const tools = page === "tools";
  const books = page === "books";
  const blogs = page === "blogs";
  const iaq = page === "iaq";

  return (
    <div className="App">
      <div className={`${page === "home" ? "shortDownSpacer" : ""}`}>
        <NavBar
          onSelect={changeRoute}
        />
      </div>
      {home && <Homepage
        changeRoute={changeRoute}
      />}
      {lessons && <Lessons />}
      {books && <Books
        action={route.action}
      />}
      {tools && <Tools />}
      {blogs && <Blogs />}
      {iaq && <IAQ />}
      <Foot />
    </div>
  );
}

export default App;


