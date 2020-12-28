import React, { Component, Suspense } from "react";
const NavDesk = React.lazy(() => import("./NavDesk.js"));
const NavMob = React.lazy(() => import("./NavMob.js"));
export default class Navigation extends Component {
    render() {  
    return (
      <div>
        {window.innerWidth > 900 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <NavDesk />
          </Suspense>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            <NavMob />
          </Suspense>
        )}
      </div>
    );
  }
}