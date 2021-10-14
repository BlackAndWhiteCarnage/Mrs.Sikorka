import RootProvider from 'hoc/RootProvider';
import Navigation from 'components/Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
// VIEWS
import Home from 'views/Home/Home';
import PriceList from 'views/PriceList/PriceList';
import Offer from 'views/Offer/Offer';
import AboutMe from 'views/AboutMe/AboutMe';
import Contact from 'views/Contact/Contact';

function Root() {
  return (
    <RootProvider>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/o_mnie'>
          <AboutMe />
        </Route>
        <Route exact path='/oferta'>
          <Offer />
        </Route>
        <Route exact path='/cennik'>
          <PriceList />
        </Route>
        <Route exact path='/kontakt'>
          <Contact />
        </Route>
      </Switch>
    </RootProvider>
  );
}

export default Root;
