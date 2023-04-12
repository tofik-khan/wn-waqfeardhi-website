import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import styled from "styled-components";

import {
  TITLE,
  SUBTITLE,
  DESCRIPTION,
  SLUG,
} from "/pages/api/get-listings-data";

import TextInput from "/components/TextInput";
import Dropdown from "/components/Dropdown";
import Button from "/components/Button";
import ToggleSwitch from "/components/ToggleSwitch";
import TextArea from "/components/TextArea";
import { Navigation } from "../../partials/Nav";
import Footer from "../../partials/Footer";

const StyledContainer = styled(Container)`
  width: 700px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default function Page({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const jammatOptions = require("/content/jammat.json");
  const auxiliaryOptions = [
    { value: "Ansar", label: "Ansarullah" },
    { value: "Atfal", label: "Atfal-ul-Ahmadiyya" },
    { value: "Khuddam", label: "Khuddam-ul-Ahmadiyya" },
    { value: "Lajna", label: "Lajna Ima'illah" },
    { value: "Nasirat", label: "Nasirat-ul-Ahmadiyya" },
  ];

  const [formData, updateFormData] = useState({
    jammat: jammatOptions[0].value,
    aux: auxiliaryOptions[0].value,
  });
  const [screen, updateScreen] = useState("FORM");

  if (data.length === 0) {
    return <h1>Loading</h1>;
  }

  const selectedListing = data.filter((element) => element[SLUG] === slug)[0];
  if (selectedListing.length === 0) {
    return <h1>Listing not Found</h1>;
  }

  if (screen === "FORM") {
    return (
      <>
        <Navigation />
        <h1 className="py-5 text-center">{selectedListing[TITLE]}</h1>
        <p className="text-center">{selectedListing[SUBTITLE]}</p>
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>{selectedListing[DESCRIPTION]}</Col>
          </Row>
        </Container>
        <StyledContainer className="py-5">
          <Row>
            <h2>Submit Form</h2>
          </Row>
          <Row className="py-2">
            <Col sm={6}>
              <TextInput
                label="First Name"
                isError={checkFirstnameError(formData)}
                errorMessage="This field cannot be left blank"
                onChange={(event) =>
                  updateFormData({ ...formData, firstname: event.target.value })
                }
              />
            </Col>
            <Col sm={6}>
              <TextInput
                label="Last Name"
                isError={checkLastnameError(formData)}
                errorMessage="This field cannot be left blank"
                onChange={(event) =>
                  updateFormData({ ...formData, lastname: event.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="py-2">
            <Col sm={6}>
              <TextInput
                label="Email"
                isError={false} //Todo: Figure out how to determine if email is valid on submit?
                errorMessage="This must be a valid email"
                onChange={(event) =>
                  updateFormData({ ...formData, email: event.target.value })
                }
              />
            </Col>
            <Col sm={6}>
              <Dropdown
                label="Jammat"
                options={jammatOptions}
                onChange={(option) =>
                  updateFormData({ ...formData, jammat: option.value })
                }
              />
            </Col>
          </Row>
          <Row className="py-2 align-items-center">
            <Col sm={6}>
              <Dropdown
                label="Auxiliary"
                options={auxiliaryOptions}
                onChange={(option) =>
                  updateFormData({ ...formData, aux: option.value })
                }
              />
            </Col>
            <Col sm={6} className="pt-4">
              <ToggleSwitch
                label="Are you part of the Waqf-e-Nau Scheme?"
                onChange={(event) =>
                  updateFormData({
                    ...formData,
                    isWaqfeNau: event.target.checked,
                  })
                }
              />
            </Col>
          </Row>
          <Row className="py-2 justify-content-center">
            <Col sm={12}>
              <TextArea
                label="Share any relevant experience or comments"
                onChange={(event) =>
                  updateFormData({ ...formData, comment: event.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="py-2 justify-content-center">
            <Col md={3}>
              <Button
                variant="primary"
                onClick={() => {
                  submitForm(formData, slug);
                  updateScreen("SUBMITTED");
                }}
              >
                Submit
              </Button>
            </Col>
            <Col md={3}>
              <Button variant="secondary" href="/listings">
                Cancel
              </Button>
            </Col>
          </Row>
        </StyledContainer>
        <Footer />
      </>
    );
  } else if (screen === "SUBMITTED") {
    return (
      <>
        <h1>Submitted</h1>
      </>
    );
  }
}

export async function getServerSideProps() {
  const data = require("/content/listings.json");
  return { props: { data } };
}

function checkFirstnameError(formData) {
    return formData["firstname"] !== undefined && formData.firstname === "";
}

function checkLastnameError(formData) {
    return formData["lastname"] !== undefined && formData.lastname === "";
}

async function submitForm(formData, slug) {
    const body = {
        auth: process.env.API_AUTH_TOKEN,
        formData: {...formData, slug: slug}
    }

    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    }

    fetch("/api/sheets-post", requestOptions)
        .then((response) => response.json())
        .then((response) => console.log(response));
    

}
