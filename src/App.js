import './App.css';
import { Home } from './Pages/Home';
import { AboutMe } from './Pages/AboutMe';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ContactMe from './Pages/ContactMe';
import Portafolio from './Pages/Portafolio';


function App() {
  return (
      
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/aboutMe'>
          <AboutMe />
        </Route>
        <Route exact path='/portfolio/retrato'>
          <Portafolio name="Retrato"/>
        </Route>
        <Route exact path='/portfolio/moda'>
          <Portafolio name="Moda"/>
        </Route>
        <Route exact path='/portfolio/exterior'>
          <Portafolio name="Exterior"/>
        </Route>
        <Route exact path='/contactMe'>
          <ContactMe />
        </Route>
      </Switch>
    
  );
}

export default App;