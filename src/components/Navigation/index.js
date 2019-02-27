import React from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBDropdownToggle,
    MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBDropdown
} from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../src/constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <div>
                <AuthUserContext.Consumer>
                    {authUser =>
                        authUser ? (
                            <header>
                                <MDBNavbar color="black" dark expand="md">
                                    <MDBNavbarBrand href={ROUTES.LANDING}>
                                        <strong className="white-text">Aappss</strong>
                                    </MDBNavbarBrand>
                                    <MDBNavbarToggler onClick={this.onClick} />
                                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapse} navbar>
                                        <MDBNavbarNav left>
                                            <MDBNavItem >
                                                <MDBNavLink to={ROUTES.HOME}>Home</MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem >
                                                <MDBNavLink to={ROUTES.ACCOUNT}>Account</MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem >
                                                <MDBNavLink to={ROUTES.ADMIN}>Admin</MDBNavLink>
                                            </MDBNavItem>
                                        </MDBNavbarNav>
                                        <MDBNavbarNav right>
                                            <MDBNavItem>
                                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                                    <MDBIcon fab icon="twitter" />
                                                </MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                                    <MDBIcon fab icon="google-plus-g" />
                                                </MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                                <MDBDropdown>
                                                    <MDBDropdownToggle nav caret>
                                                        <MDBIcon icon="user" />
                                                    </MDBDropdownToggle>
                                                    <MDBDropdownMenu className="dropdown-default" right>

                                                        <MDBDropdownItem href="#"><SignOutButton /></MDBDropdownItem>
                                                    </MDBDropdownMenu>
                                                </MDBDropdown>
                                            </MDBNavItem>
                                        </MDBNavbarNav>
                                    </MDBCollapse>
                                </MDBNavbar>
                            </header>
                        ) : (
                                <MDBNavbar color="black" dark expand="md" fixed="top">
                                    <MDBNavbarBrand href={ROUTES.LANDING}>
                                        <strong className="white-text">Aappss</strong>
                                    </MDBNavbarBrand>
                                    <MDBNavbarToggler onClick={this.onClick} />
                                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapse} navbar>
                                        <MDBNavbarNav left>
                                            {/* <MDBNavItem active>
                                                <MDBNavLink to={ROUTES.LANDING}>Landing</MDBNavLink>
                                            </MDBNavItem> */}
                                        </MDBNavbarNav>
                                        <MDBNavbarNav right>
                                            <MDBNavItem>
                                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                                    <MDBIcon fab icon="twitter" />
                                                </MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                                    <MDBIcon fab icon="google-plus-g" />
                                                </MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                                <MDBDropdown>
                                                    <MDBDropdownToggle nav caret>
                                                        <MDBIcon icon="user" />
                                                    </MDBDropdownToggle>
                                                    <MDBDropdownMenu className="dropdown-default" right>
                                                        <MDBDropdownItem href={ROUTES.SIGN_IN}>Sign In</MDBDropdownItem>
                                                    </MDBDropdownMenu>
                                                </MDBDropdown>
                                            </MDBNavItem>
                                        </MDBNavbarNav>
                                    </MDBCollapse>
                                </MDBNavbar>
                            )
                    }
                </AuthUserContext.Consumer>
            </div>
        );
    }
}

export default Navigation;