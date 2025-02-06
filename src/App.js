import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Pokedex from './components/Pokedex';



function App() {

  const { isAuthenticated } = useAuth0();


  return (
    <div className="App">
      {
        <>
          <Header />
          {isAuthenticated ? (<Pokedex/>) : (<></>)}
        </>
      }
    </div>
  );

}

export default App;
