import React, { useState } from 'react';
import GameScreen from './GameScreen';
import MenuScreen from './MenuScreen';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [character, setCharacter] = useState({1:'x', 2:'o'})

  const handleCharacter = (char: string) => {
    if(char === 'x'){
      setCharacter({1:char, 2:'o'})
    }else{
      setCharacter({1:char, 2:'x'})
    }
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<MenuScreen character={character} handleCharacter={handleCharacter}/>}/>
          <Route path='/game' element={<GameScreen character={character}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
