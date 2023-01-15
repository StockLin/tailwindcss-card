import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className=" flex justify-center p-16 bg-gray-300">
        <div className="  grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
