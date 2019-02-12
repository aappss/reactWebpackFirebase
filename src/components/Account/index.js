import React from 'react';

import { AuthUserContext } from '../Session';
// import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import { Container } from 'mdbreact';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <Container>
                <h1>Account: {authUser.email}</h1>

            </Container>
        )}
    </AuthUserContext.Consumer>
);
// console.log(authUser.email);
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);