import React, {useEffect} from 'react';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {Dispatch, ReactNode, createContext, useState} from 'react';
import {Auth, Hub} from 'aws-amplify';
import {HubCallback} from '@aws-amplify/core';

type UserType = CognitoUser | null | undefined;

type AuthContextType = {
  user: UserType;
  setUser: Dispatch<React.SetStateAction<UserType>>;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UserType>(undefined);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        setUser(authUser);
      } catch (error) {
        setUser(null);
      }
    };
    checkUser();
  }, []);

  useEffect(() => {
    const listener: HubCallback = data => {
      const {event} = data.payload;
      if (event === 'signOut') {
        setUser(null);
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => React.useContext(AuthContext);
