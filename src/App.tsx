import React from 'react';
import GameScreen from './GameScreen';
import MenuScreen from './MenuScreen';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<MenuScreen/>}/>
          <Route path='/game' element={<GameScreen/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
