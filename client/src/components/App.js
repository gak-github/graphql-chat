import { ApolloProvider } from '@apollo/client';
import React, { useState } from 'react';
import client from '../graphql/client';
import { getLoggedInUser, logout } from '../utils/auth';
import Chat from './Chat';
import Login from './Login';
import NavBar from './NavBar';

const App = () => {
  const [user, setUser] = useState(getLoggedInUser())
  const handleLogin = (user) => {
    setUser(user)
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <ApolloProvider client={client}>
        <NavBar onLogout={handleLogout} />
        <Chat user={user} />
      </ApolloProvider>
  );
};
export default App;
