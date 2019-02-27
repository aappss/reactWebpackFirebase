import React from 'react';
import { MDBDropdownItem } from 'mdbreact';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <MDBDropdownItem onClick={firebase.doSignOut}>SignOut</MDBDropdownItem>
);

export default withFirebase(SignOutButton);