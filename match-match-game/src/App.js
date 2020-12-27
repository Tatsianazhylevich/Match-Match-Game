import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import {
  Header, MatchMatchGame, LoginPage, MainPage, GameBoard,
} from './components';
import { Rules } from './components/MainPage/Rules';
// import {bootstrapStart} from './components/actions'
// import { useSelector, useDispatch } from 'react-redux';

function App() {
  // const { isAutorized,bootstraped, } = useSelector((state) => state.login);
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(bootstrapStart());
  // }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MatchMatchGame} />
          <Route exact path="/autorization" component={LoginPage} />
          <Route path="/MainPage" component={MainPage} />
          <Route path="/Rules" component={Rules} />
          <Route path="/GameBoard" component={GameBoard} />
          <Redirect to="/" />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
