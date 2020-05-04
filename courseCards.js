import React, { Component, useState } from "react";
import Selector from "react-awesome-selector";
import "react-awesome-selector/dist/style.css";
import isEmpty from "lodash/isEmpty";
import axios from "axios";
import Board from "react-trello/dist";
import update from "immutability-helper";
import "../CSS/courseCards.css";

import {
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

const CardExample = () => {
  return (
    <MDBRow>
      <MDBCol md="4" style={{ maxWidth: "22rem" }}>
        <MDBCard className="cc">
          <MDBCardTitle className="cc-title">Comp 110</MDBCardTitle>
          <MDBCardBody className="cc-body">
            <MDBCardTitle>Tutors</MDBCardTitle>
            <MDBCardText>Jeffrey_Ramos@my.csun.edU</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4" style={{ maxWidth: "22rem" }}>
        <MDBCard>
          <MDBCardTitle className="cc-title">Comp 182</MDBCardTitle>
          <MDBCardBody>
            <MDBCardTitle>Tutors</MDBCardTitle>
            <MDBCardText>kevin_martinez@my.csun.edu</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4" style={{ maxWidth: "22rem" }}>
        <MDBCard>
          <MDBCardTitle className="cc-title">Comp 222</MDBCardTitle>
          <MDBCardBody>
            <MDBCardTitle>Tutors</MDBCardTitle>
            <MDBCardText>justin_preming@my.csun.edu</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default CardExample;
