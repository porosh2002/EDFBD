import React, { Suspense,Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import Loader from './components/Loader/Loader';
import { connect } from 'react-redux';
import Footer from './components/Footer/Footer';
import { NotificationMenu } from "./Redux/NotificationMenu/nof_selector";
const Home = React.lazy(() => import("./Pages/Home"));
 class App extends Component {
  state = {
    navOpen: false,
  };
  NavCall = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };
   render() {
    const { notification_menu } = this.props;
    const NavOpenStyleMargin = notification_menu ? { marginLeft: "250px" } : {};
    return (
      <div>
      <header>
          <Navigation />
      </header>
      <div style={NavOpenStyleMargin}>
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
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // userID: selectCurrentUser(state),
    // account_menu: AccountMenu(state),
    notification_menu: NotificationMenu(state),
  };
};
export default connect(mapStateToProps,null)(App);