import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/EmployeesList'
import EmployeeListContainer from "./containers/EmployeeListContainer";
import RandomTableContainer from "./containers/RandomTableContainer";
import RandomFooterContainer from "./containers/RandomFooterContainer";

function App() {
  return (
      <div className="container" id="page-wrapper">
          <div id="sidebar-wrapper">
            <EmployeeListContainer />
          </div>
          <div id="page-content-wrapper">
              <div className="container-fluid">
                  <h1>Random Box</h1>
                  <RandomTableContainer />
                  <RandomFooterContainer />
              </div>
          </div>
      </div>
  );
}

export default App;
