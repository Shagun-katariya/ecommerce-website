import React, {Fragment} from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import Header from "../Header/Header.js";


const Contact = () => {
  return (
    <Fragment>
      <Header />
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:katariyashagun22052003@gmail.com">
        <Button>Contact: katariyashagun22052003@gmail.com</Button>
      </a>
    </div>
    </Fragment>
  );
};

export default Contact;
