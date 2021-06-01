import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { Home } from './Components/Home';
import { UpdateUser } from './Components/UpdateUser';
import { Add } from './Components/Add';

export const usersContext = createContext();

function App() {
  const [users, setUser] = useState([]);
  return (
    <div className="app">
      <Router>
        <Switch>
          <usersContext.Provider value={[users, setUser]}>
            <Route path="/" exact component={Home} />
            <Route path="/add" exact component={Add} />
            <Route exact path="/update/:id" component={UpdateUser} />
          </usersContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export { App };
