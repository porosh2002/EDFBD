import React, { Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Loader from './components/Loader/Loader'
import Footer from './components/Footer/Footer';
const Home = React.lazy(() => import("./Pages/Home"));
function App() {
  return(
    <div>
      <header>
      <Navigation />
      </header>
      <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={Error} /> */}
          </Switch>
        </Suspense>

      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
