import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx/Nav'
import Nav2 from './Nav.jsx/Nav2'
import Film from './screens/Film'
import Banner from './screens/Banner'

function App() {
  return (
    <div>
      <Nav />
      <Nav2 />
      <Banner/>
      <Switch>
      
      
      <Route exact path="/Movies"><Film/></Route>
        <Route exact path="/"></Route>
        </Switch>
      
    </div>
  );
}

export default App;
