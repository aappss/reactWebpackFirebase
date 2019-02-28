import React from "react";

import { MDBView, MDBMask } from "mdbreact";

const Landing = () => (
  <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg">
    <MDBMask
      overlay="black-strong"
      className="flex-center flex-column text-white text-center"
    >
      <h2>This Navbar isn't fixed</h2>
      <h5>When you scroll down it will disappear</h5>
      <br />
      <p>
        Full page intro with background image will be always displayed in full
        screen mode, regardless of device{" "}
      </p>
    </MDBMask>
  </MDBView>
);

export default Landing;
