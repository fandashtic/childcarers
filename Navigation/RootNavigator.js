import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const RootStack = createStackNavigator();

import LandingNavigator from './LandingNavigator';
import InitNavigator from './InitNavigator';

const RootNavigator = ({userToken}) => {
  return (
    <RootStack.Navigator headerMode="none">
      {userToken ? (
        <RootStack.Screen
          name="App"
          component={LandingNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={InitNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
