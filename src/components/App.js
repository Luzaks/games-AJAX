import React from 'react';
import '../styles/App.css';
import {Link, Route} from 'react-router-dom';
import GamesPage from "../../../crud/src/components/GamesPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Link to="games">Games</Link>
        </p>
        <Route path="/games" component={GamesPage}/>
      </header>
    </div>
  );
}

export default App;
