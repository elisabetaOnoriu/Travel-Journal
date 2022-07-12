import React from "react";
import data from "./data";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";


function App() {

  const card = data.map(item => {

    return (
      <Cards 
        key = {item.id}
        {...item}
        />  
    );
  });

  return (
    <div className="App">
     <Navbar />
    <section className="card-container"> {card}
    </section>
    </div>
  );
}
export default App;
