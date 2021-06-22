import { BrowserRouter, Route } from 'react-router-dom';
import { createContext, useEffect } from 'react';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { useState } from 'react';
import { firebase, auth } from './services/firebase';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path='/' exact component={Home} />
        <Route path='/roons/new' component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
