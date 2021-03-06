import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from "mdbreact";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../../src/constants/routes";

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <MDBContainer className="marginTopSignin">
        <MDBRow>
          <MDBCol md="5" className="offset-md-3">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="pink-text mb-5">
                    <strong>Sign In</strong>
                  </h3>
                </div>
                <MDBInput
                  label="Your email"
                  group
                  type="text"
                  validate
                  name="email"
                  value={email}
                  onChange={this.onChange}
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  name="password"
                  value={password}
                  onChange={this.onChange}
                />
                <MDBRow className="d-flex align-items-center mb-4">
                  <MDBCol md="6" className="text-center">
                    <button
                      type="button"
                      disabled={isInvalid}
                      onClick={this.onSubmit}
                      className="btn btn-pink btn-block btn-rounded z-depth-1"
                    >
                      {" "}
                      Sign In{" "}
                    </button>
                  </MDBCol>
                  {error && <p>{error.message}</p>}
                  <MDBCol md="6">
                    <p className="font-small grey-text d-flex justify-content-end">
                      <SignUpLink />
                    </p>
                  </MDBCol>
                  <MDBCol md="6">
                    <p className="font-small grey-text d-flex justify-content-end">
                      <PasswordForgetLink />
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <div className="footer pt-3 mdb-color lighten-3">
                <MDBRow className="d-flex justify-content-center">
                  <p className="font-small white-text mb-2 pt-3">
                    {" "}
                    or Sign up with:{" "}
                  </p>
                </MDBRow>
                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                  <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                    <MDBIcon
                      icon="facebook-f"
                      fab
                      size="lg"
                      className="white-text"
                    >
                      {" "}
                    </MDBIcon>
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                    <MDBIcon className="fab fa-twitter white-text fa-lg">
                      {" "}
                    </MDBIcon>
                  </a>
                  <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                    <MDBIcon className="fab fa-google-plus-g white-text fa-lg">
                      {" "}
                    </MDBIcon>
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

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
