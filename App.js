import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext} from './Navigation/Context';

import RootNavigator from './Navigation/RootNavigator';
import Splash from './Navigation/Splash';

const user = {
  userId: null,
  userName: null,
  firstName: null,
  lastName: null,
  profileUrl: null,
};

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [user, setIsUser] = React.useState(user);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  console.log(userToken);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootNavigator userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
