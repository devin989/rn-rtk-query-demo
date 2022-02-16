/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Provider} from 'react-redux';

import {store} from './src/store/store';
import Home from "./src/screens/Home";




const App = () => {


  return (
      <Provider store={store}>
        <Home/>
      </Provider>
  )
};


export default App;
