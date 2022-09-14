import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import { ConnectionConstructor } from './scripts/stream';
import * as glob from './scripts/global';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;
    constructor(props) {
        super(props);
        this.state = {
            response: null
        }
        const connection = ConnectionConstructor("/streamHub");

        glob.init(connection);
        /*(async () => {
            await init(document, response, connection);
        })();*/
    }

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}
