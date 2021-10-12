import RootProvider from 'hoc/RootProvider';
import Navigation from 'components/Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
// VIEWS
import Home from 'views/Home/Home';
import PriceList from 'views/PriceList/PriceList';

function Root() {
  return (
    <RootProvider>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/o_mnie'>
          <h1>O Mnie</h1>
        </Route>
        <Route exact path='/oferta'>
          <h1>Oferta</h1>
        </Route>
        <Route exact path='/cennik'>
          <PriceList />
        </Route>
        <Route exact path='/kontakt'>
          <h1>Kontakt</h1>
        </Route>
      </Switch>
    </RootProvider>
  );
}

export default Root;
