import ColourForm from "./ColourForm";
import ColourBox from "./ColourBox";
import { useState } from "react";

function App() {
  const [newColour, setNewColour] = useState('');
  const [newHex, setNewHex] = useState('');
  const [isDarkText, setIsDarkText] = useState('');

  return (
    <div className="App">

        <ColourBox 
        newColour={ newColour }
        newHex={ newHex }
        isDarkText={isDarkText}
        />

        <ColourForm 
        newColour={ newColour }
        setNewColour= { setNewColour }
        setNewHex={setNewHex}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
        />

    </div>
  );
}

export default App;
