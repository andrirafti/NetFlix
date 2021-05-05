import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx/Nav'
import Nav2 from './Nav.jsx/Nav2'
import Film from './screens/Film'

function App() {
  return (
    <div>
      <Nav />
      <Nav2 />
      <Switch>
      
      <Route exact path="/Movies"><Film/></Route>
        <Route exact path="/"></Route>
        </Switch>
      
    </div>
  );
}

export default App;
