import React from 'react';

import { Header, MatchMatchGame, } from './components';
// import {bootstrapStart} from './components/actions'
// import { useSelector, useDispatch } from 'react-redux';

function App() {
  // const { isAutorized,bootstraped, } = useSelector((state) => state.login);
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(bootstrapStart());
  // }, [dispatch])

  return <div>
    <Header />
    <MatchMatchGame />
  </div>
    
}

export default App;
