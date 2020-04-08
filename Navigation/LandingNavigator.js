import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const LandingStack = createStackNavigator();

import Home from './../Pages/Home/Home';

import AllFeeds from './../Pages/Modules/AllFeeds';
import ChildrenUpdate from './../Pages/Modules/ChildrenUpdate/ChildrenUpdate';
import LearningJourney from './../Pages/Modules/LearningJourney/LearningJourney';
import News from './../Pages/Modules/News/News';
import Programs from './../Pages/Modules/Programs/Programs';

import Gallary from './../Pages/Gallary/Gallary';
import Photos from './../Pages/Gallary/Photos';
import Video from './../Pages/Gallary/Video';

const LandingNavigator = () => {
  return (
    <LandingStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <LandingStack.Screen
        name="Home"
        component={Home}
        options={{
          navigationOptions: {
            header: null,
          },
        }}
      />
      <LandingStack.Screen
        name="Posts"
        component={AllFeeds}
        options={{
          title: 'All Feeds!',
          headerStyle: {
            backgroundColor: 'limegreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <LandingStack.Screen
        name="Gallary"
        component={Gallary}
        options={{title: 'My Gallary'}}
      />
      <LandingStack.Screen
        name="Photos"
        component={Photos}
        options={{title: 'My home'}}
      />
      <LandingStack.Screen
        name="Video"
        component={Video}
        options={{title: 'My home'}}
      />
      <LandingStack.Screen
        name="ChildrenUpdate"
        component={ChildrenUpdate}
        options={{title: 'My home'}}
      />
      <LandingStack.Screen
        name="LearningJourney"
        component={LearningJourney}
        options={{title: 'My home'}}
      />
      <LandingStack.Screen
        name="News"
        component={News}
        options={{title: 'My home'}}
      />
      <LandingStack.Screen
        name="Programs"
        component={Programs}
        options={{title: 'My home'}}
      />
      <LandingStack.Screen
        name="AllFeeds"
        component={AllFeeds}
        options={{title: 'My home'}}
      />
    </LandingStack.Navigator>
  );
};

export default LandingNavigator;
