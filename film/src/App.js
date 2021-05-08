import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx/Nav'
import Nav2 from './Nav.jsx/Nav2'
import Film from './screens/Film'
import Banner from './screens/Banner'
import Banner2 from'./screens/Banner2'
import FilmDetail from './screens/FilmDetail'
import FilmCreate from './screens/FilmCreate'

function App() {
  return (
    <div>
      <Nav
      />
      <Nav2 />
      
      <Switch>
      <Route exact path="/Create"><FilmCreate/></Route>
      <Route exact path="/Movies/:id"><FilmDetail/></Route>
      <Route  exact path="/Movies"><Film/></Route>
        <Route exact path="/"> <Banner/> <Banner2/> </Route>
        </Switch>
      
    </div>
  );
}

export default App;
