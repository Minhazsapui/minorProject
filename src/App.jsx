import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = () => {
    setBoxes((prevBoxes) => [...prevBoxes, `Box ${prevBoxes.length + 1}`]);
  };

  return (
    <div >
      {/* Add Element Button */}
      <button onClick={addBox} className="button">
        Add Element
      </button>

      {/* Container for the Boxes */}
      <div className="container">
        {boxes.map((box, index) => (
          <div key={index} className="box">
            {index + 1}
            </div>
        ))}
      </div>
    </div>
  );
}



export default App;
