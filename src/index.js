import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PageTransition from 'react-router-page-transition';

import history from 'store/history';
import store from 'store';
import 'stylesheets';
import Home from 'containers/panels/Home';
import GettingMarried from 'containers/panels/GettingMarried';
import Speech from 'containers/panels/Speech';
import Groom from 'containers/panels/Groom';
import Bride from 'containers/panels/Bride';
import Milestone from 'containers/panels/Milestone';
import Invitation from 'containers/panels/Invitation';
import Rsvp from 'containers/panels/Rsvp';
import RsvpCompany from 'containers/panels/RsvpCompany';
import Confirmation from 'containers/panels/Confirmation';
import Thanks from 'containers/panels/Thanks';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route
        render={({ location }) => (
          <div className="mobile-wrapper">
            <PageTransition timeout={300}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/getting-married" component={GettingMarried} />
                <Route path="/speech" component={Speech} />
                <Route path="/groom" component={Groom} />
                <Route path="/bride" component={Bride} />
                <Route path="/milestone" component={Milestone} />
                <Route path="/invitation" component={Invitation} />
                <Route path="/rsvp" component={Rsvp} />
                <Route path="/rsvp_company" component={RsvpCompany} />
                <Route path="/confirmation" component={Confirmation} />
                <Route path="/thanks" component={Thanks} />
              </Switch>
            </PageTransition>
          </div>
        )}
      />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
