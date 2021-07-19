import React, { useState } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

export default function App() {
  const [state, setState] = useState([]);

  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  
    return (
     
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/trending" />}
              />

              <Route
                path="/trending"
                render={() => <Item state={state} setState={setState} searchTerm="trending" />}
              />
              <Route path="/cat" render={() => <Item state={state} setState={setState} searchTerm="cat" />} />
              <Route path="/happy" render={() => <Item state={state} setState={setState} searchTerm="happy" />} />
              <Route path="/anime" render={() => <Item state={state} setState={setState} searchTerm="anime" />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search state={state} setState={setState} searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
    );
}