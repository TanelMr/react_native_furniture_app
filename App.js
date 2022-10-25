import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Signin from './src/screens/auth/Signin';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/screens/auth/Splash';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Signin />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
