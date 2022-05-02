
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Routes

import Routes from './src/routes/index';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App;