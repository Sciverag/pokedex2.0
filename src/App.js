import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {

  const { isAuthenticated } = useAuth0();


  return (
    <div className="App">
      {
        <>
          <Header />

          <Footer />
        </>
      }
    </div>
  );

}

export default App;
