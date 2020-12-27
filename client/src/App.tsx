import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer';
// import Loader from './components/Loader/Loader'
function App() {
  return(
    <div>
      <header>
      <Navigation />
      </header>
      {/* <Loader /> */}
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
