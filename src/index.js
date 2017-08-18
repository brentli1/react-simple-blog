import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route }         from 'react-router-dom';

import reducers                         from './reducers';
import PostsIndex                       from './components/posts-index';
import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <section>
        <Route path="/" component={PostsIndex} />
      </section>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app-body')
);
