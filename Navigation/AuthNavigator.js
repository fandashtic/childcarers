import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const AuthStack = createStackNavigator();

import Login from './../Pages/Login/Login';
import SignUp from './../Pages/Login/SignUp';

const AuthNavigator = ({authContext}) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={Login}
        options={{title: 'Sign In'}}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={SignUp}
        options={{title: 'Create Account'}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
