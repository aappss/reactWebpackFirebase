import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdbreact';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../../src/constants/routes';

const SignUpPage = () => (
    <div>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                    })
                    .then(() => {
                        this.setState({ ...INITIAL_STATE });
                        this.props.history.push(ROUTES.SIGN_IN);
                    })
                    .catch(error => {
                        this.setState({ error });
                    });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (

            <MDBContainer className="marginTopSignin">
                <MDBRow>
                    <MDBCol md="5" className="offset-md-3">
                        <MDBCard>
                            <MDBCardBody className="mx-4">
                                <div className="text-center">
                                    <h3 className="pink-text mb-5">
                                        <strong>Sign Up</strong>
                                    </h3>
                                </div>
                                <MDBInput label="Your Name" group type="text" validate name="username" value={username} onChange={this.onChange} />
                                <MDBInput label="Your email" group type="text" validate name="email" value={email} onChange={this.onChange} />
                                <MDBInput label="Your password" group type="password" validate name="passwordOne" value={passwordOne} onChange={this.onChange} />
                                <MDBInput label="Confirm password" group type="password" validate name="passwordTwo" value={passwordTwo} onChange={this.onChange} />
                                <MDBRow className="d-flex align-items-center mb-4">
                                    <MDBCol md="6" className=" offset-md-2 text-center">
                                        <button type="button" disabled={isInvalid} onClick={this.onSubmit} className="btn btn-pink btn-block btn-rounded z-depth-1"> Sign Up </button>
                                    </MDBCol>
                                    <MDBCol md="6">
                                        <p className="font-small grey-text d-flex justify-content-end"> Have an account?
                                            <a href={ROUTES.SIGN_IN} className="blue-text ml-1">  Log in </a>
                                        </p>
                                    </MDBCol>
                                    {error && <p>{error.message}</p>}
                                </MDBRow>
                            </MDBCardBody>
                            <div className="footer pt-3 mdb-color lighten-3">
                                <MDBRow className="d-flex justify-content-center">
                                    <p className="font-small white-text mb-2 pt-3"> or Sign up with: </p>
                                </MDBRow>
                                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                                    <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                                        <MDBIcon icon="facebook-f" fab size="lg" className="white-text"> </MDBIcon>
                                    </a>
                                    <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                                        <MDBIcon className="fab fa-twitter white-text fa-lg"> </MDBIcon>
                                    </a>
                                    <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                                        <MDBIcon className="fab fa-google-plus-g white-text fa-lg"> </MDBIcon>
                                    </a>
                                </MDBRow>
                            </div>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink };