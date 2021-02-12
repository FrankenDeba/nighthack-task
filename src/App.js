import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Github from "./components/Github/Github"
import { initialState, reducer } from "./store/reducer"


export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" exact component={Home}/>
        <Route path="/github" component={Github}/>
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;