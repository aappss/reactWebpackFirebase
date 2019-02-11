// import React from 'react';
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collapse: false,
//       isWideEnough: false,
//     };
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick() {
//     this.setState({
//       collapse: !this.state.collapse,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Router>
//           <header>
//             <MDBNavbar color="black" fixed="top" dark expand="md">
//               <MDBContainer>
//                 <MDBNavbarBrand href="/">
//                   <strong>Navbar</strong>
//                 </MDBNavbarBrand>
//                 <MDBNavbarToggler onClick={this.onClick} />
//                 <MDBCollapse isOpen={this.state.collapse} navbar>
//                   <MDBNavbarNav left>
//                     <MDBNavItem active>
//                       <MDBNavLink to="#">Home</MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="#">Link</MDBNavLink>
//                     </MDBNavItem>
//                     <MDBNavItem>
//                       <MDBNavLink to="#">Profile</MDBNavLink>
//                     </MDBNavItem>
//                   </MDBNavbarNav>
//                 </MDBCollapse>
//               </MDBContainer>
//             </MDBNavbar>
//             <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg">
//               <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
//                 <h2>This Navbar isn't fixed</h2>
//                 <h5>When you scroll down it will disappear</h5>
//                 <br />
//                 <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
//               </MDBMask>
//             </MDBView>
//           </header>
//         </Router>
//         <main>
//           <MDBContainer className="text-center my-5">
//             <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.</p>
//           </MDBContainer>
//         </main>
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../src/components/Navigation';
import LandingPage from '../src/components/Landing';
import SignUpPage from '../src/components/SignUp';
import SignInPage from '../src/components/SignIn';
import PasswordForgetPage from '../src/components/PasswordForget';
import HomePage from '../src/components/Home';
import AccountPage from '../src/components/Account';
import AdminPage from '../src/components/Admin';

import * as ROUTES from '../src/constants/routes';
import { withAuthentication } from '../src/components/Session';

const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exactpath={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />
        </div>
    </Router>
);

export default withAuthentication(App);