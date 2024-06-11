"use client";
// pages/index.js
import React, { useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Result from "../components/Result";

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = async (entry) => {
    try {
      const response = await fetch(`http://localhost:3000/${entry}`);
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      <Header />
      <main className="container">
        <Body handleSubmit={handleSubmit} />
      </main>
      <Result result={users} totalMatch={users.length} />
    </>
  );
}

export default App;
