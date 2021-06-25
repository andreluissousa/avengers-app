import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React from 'react';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Routes />
    </>
  );
}

export default registerRootComponent(App);
