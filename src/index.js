import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import history from 'store/history';
import store from 'store';
import 'stylesheets';
import asyncContainerLoader from 'utils/asyncContainerLoader';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="mobile-wrapper">
        <Route exact path="/" component={asyncContainerLoader('panels/Home')} />
        <Route path="/getting-married" component={asyncContainerLoader('panels/GettingMarried')} />
        <Route path="/speech" component={asyncContainerLoader('panels/Speech')} />
        <Route path="/groom" component={asyncContainerLoader('panels/Groom')} />
        <Route path="/bride" component={asyncContainerLoader('panels/Bride')} />
        <Route path="/milestone" component={asyncContainerLoader('panels/Milestone')} />
        <Route path="/invitation" component={asyncContainerLoader('panels/Invitation')} />
        <Route path="/rsvp" component={asyncContainerLoader('panels/Rsvp')} />
        <Route path="/rsvp_company" component={asyncContainerLoader('panels/RsvpCompany')} />
        <Route path="/confirmation" component={asyncContainerLoader('panels/Confirmation')} />
        <Route path="/thanks" component={asyncContainerLoader('panels/Thanks')} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);
