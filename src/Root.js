import RootProvider from 'hoc/RootProvider';
import Navigation from 'components/Navigation/Navigation';
import { useLocation } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollTop from 'helpers/ScrollTop';
// VIEWS
import Home from 'views/Home/Home';
import PriceList from 'views/PriceList/PriceList';
import Offer from 'views/Offer/Offer';
import AboutMe from 'views/AboutMe/AboutMe';
import Contact from 'views/Contact/Contact';

function Root() {
  const location = useLocation();

  return (
    <RootProvider>
      <Navigation />
      <ScrollTop />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </RootProvider>
  );
}

export default Root;
