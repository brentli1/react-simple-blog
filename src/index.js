import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise                          from 'redux-promise';

import reducers                         from './reducers';
import PostsIndex                       from './components/posts-index';
import PostsNew                         from './components/posts-new';
import PostsShow                        from './components/posts-show';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <section>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </section>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app-body')
);
