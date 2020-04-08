import React from 'react';

const authContext = React.useMemo(({setIsLoading, setUserToken}) => {
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

export default authContext;
