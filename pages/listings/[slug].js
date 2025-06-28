import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { Container, Row, Col, Modal } from "react-bootstrap";

import styled from "styled-components";

import {
  TITLE,
  SUBTITLE,
  DESCRIPTION,
  SLUG,
  IMAGE,
  DURATION,
  AUDIENCE,
  SPONSOR,
} from "../api/get-listings-data";

import TextInput from "/components/TextInput";
import Dropdown from "/components/Dropdown";
import Button from "/components/Button";
import ToggleSwitch from "/components/ToggleSwitch";
import TextArea from "/components/TextArea";
import { Navigation } from "../../partials/Nav";
import Footer from "../../partials/Footer";
import { Heading1, Paragraph } from "../../components/Text";
import { convertToHTMLTags } from "../../helpers/format-text";
import { ClipLoader } from "react-spinners";
import { Clock, GeoAlt, Globe, Person, Pin } from "react-bootstrap-icons";

const StyledContainer = styled(Container)`
  width: 700px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const StyledImage = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-image: url(${(props) => props.url});
  border-radius: 4px;
`;

const StyledSubmittedContainer = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHeroContainer = styled.div`
  padding: 120px;
  background-color: #333333;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }
`;

const StyledProjectInfoContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const StyledProjectDescriptionContainer = styled.div`
  padding: 80px;
  display: flex;
  justify-content: space-between;
  gap: 64px;
`;

const StyledProjectSidebar = styled.div`
  min-width: 300px;
`;

export default function Page({ dataSlug }) {
  const router = useRouter();
  const { slug } = router.query;

  const jammatOptions = require("/content/jammat.json").sort((a, b) => {
    a = a.value.toLowerCase();
    b = b.value.toLowerCase();

    return a < b ? -1 : a > b ? 1 : 0;
  });
  const auxiliaryOptions = [
    { value: "Ansar", label: "Ansarullah" },
    { value: "Atfal", label: "Atfal-ul-Ahmadiyya" },
    { value: "Khuddam", label: "Khuddam-ul-Ahmadiyya" },
    { value: "Lajna", label: "Lajna Ima'illah" },
    { value: "Nasirat", label: "Nasirat-ul-Ahmadiyya" },
  ];

  const [formData, updateFormData] = useState({
    firstname: null,
    lastname: null,
    jammat: null,
    aux: null,
    phone: null,
    membercode: null,
  });
  const [screen, updateScreen] = useState("FORM");

  const [showModal, updateShowModal] = useState(false);

  const [data, updateData] = useState([]);
  const [loaded, updateLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/pull-listings")
      .then((response) => response.json())
      .then((response) => updateData(response.data))
      .then(() => updateLoaded(true));
  }, []);

  if (loaded === false) {
    return (
      <>
        <Navigation />
        <StyledSubmittedContainer>
          <ClipLoader
            color={"#fa541c"}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </StyledSubmittedContainer>
        <Footer />
      </>
    );
  }

  if (data.some((listing) => listing[SLUG] === slug)) {
    var selectedListing = data.filter((element) => element[SLUG] === slug)[0];
  } else {
    return (
      <>
        <Navigation />
        <StyledSubmittedContainer>
          <h2 align={"center"} className="py-5">
            Oops! Looks like we don't have that project
          </h2>
          <p className="body1" style={{ fontSize: "20px" }}>
            To find all avaiable projects, please use our listings page
          </p>
          <a className="button primary" href="/listings">
            Available Projects
          </a>
        </StyledSubmittedContainer>
        <Footer />
      </>
    );
  }

  if (screen === "FORM") {
    return (
      <>
        <Navigation />
        <StyledHeroContainer>
          <div>
            <h2 style={{ color: "white" }}>{selectedListing[TITLE]}</h2>
            <StyledProjectInfoContainer>
              <p
                className="body1"
                style={{
                  color: "#CCCCCC",
                  verticalAlign: "middle",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Globe />
                &nbsp; &nbsp;
                {selectedListing[SPONSOR]}
              </p>
              <p
                className="body1"
                style={{
                  color: "#CCCCCC",
                  verticalAlign: "middle",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <GeoAlt />
                &nbsp; &nbsp;
                {selectedListing[SUBTITLE]}
              </p>
            </StyledProjectInfoContainer>
          </div>
          <button className="button primary" style={{ width: "300px" }}>
            Apply Now
          </button>
        </StyledHeroContainer>
        <StyledProjectDescriptionContainer>
          <div>
            <h5>Project Description</h5>
            <p className={"body1"} style={{ color: "#1C252E" }}>
              {convertToHTMLTags(selectedListing[DESCRIPTION])}
            </p>
            <hr style={{ color: "#919EAB", marginBlock: "40px" }} />
          </div>
          <StyledProjectSidebar>
            <div className="paper">
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <Person size={"20px"} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span className="subtitle2">Audience</span>
                  <p className="body1" style={{ margin: 0 }}>
                    {selectedListing[AUDIENCE]}
                  </p>
                </div>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <Clock size={"20px"} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span className="subtitle2">Duration</span>
                  <p className="body1" style={{ margin: 0 }}>
                    {selectedListing[DURATION]}
                  </p>
                </div>
              </div>
            </div>
          </StyledProjectSidebar>
        </StyledProjectDescriptionContainer>
        <StyledContainer className="py-5">
          <Row>
            <h3>Apply for this project</h3>
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
                required
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
                required
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
                required
              />
            </Col>
            <Col sm={6}>
              <Dropdown
                label="Jammat"
                options={jammatOptions}
                defaultValue={false}
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
                defaultValue={false}
                onChange={(option) =>
                  updateFormData({ ...formData, aux: option.value })
                }
              />
            </Col>
            <Col sm={6}>
              <TextInput
                label="Phone Number"
                isError={false} //Todo: Figure out how to determine if email is valid on submit?
                errorMessage="This must be a valid email"
                onChange={(event) =>
                  updateFormData({ ...formData, phone: event.target.value })
                }
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <TextInput
                label="Member Code"
                type="number"
                isError={
                  formData.membercode !== null &&
                  !new RegExp(/[0-9]+/).test(formData.membercode)
                }
                errorMessage="The member code cannot be blank and cannot contain non-numeric values"
                onChange={(event) =>
                  updateFormData({
                    ...formData,
                    membercode: event.target.value,
                  })
                }
                required
              />
            </Col>
          </Row>
          <Row className="py-2 justify-content-center">
            <Col className="pt-4">
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
                onClick={async () => {
                  if (submitForm(formData, slug, updateShowModal)) {
                    updateScreen("SUBMITTED");
                  }
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
        <Modal
          size="lg"
          show={showModal}
          onHide={() => updateShowModal(false)}
          aria-labelledby="missing-fields-modal"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="missing-field-modal">
              Oops! We missed something...
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Paragraph>
              Looks like there is something missing. Remember, all fields are
              required.
            </Paragraph>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => updateShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer />
      </>
    );
  } else if (screen === "SUBMITTED") {
    return (
      <>
        <Navigation />
        <StyledSubmittedContainer>
          <Heading1 align={"center"} className="py-5">
            Submitted
          </Heading1>
          <Paragraph align={"center"}>جزاک اللہ</Paragraph>
          <Paragraph align={"center"} className={"px-2"}>
            Your information has been submitted, Insha'Allah a member of our
            team will reach out to you as soon as possible.
          </Paragraph>
          <Button variant="primary" href="/">
            Return Home
          </Button>
        </StyledSubmittedContainer>
        <Footer />
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

function submitForm(formData, slug, updateShowModal) {
  const hasAllFields = Object.values(formData).every(
    (value) => value !== "" && value !== null
  );

  if (!hasAllFields) {
    updateShowModal(true);
    return false;
  }

  sendEmailNotification();

  const body = {
    auth: process.env.API_AUTH_TOKEN,
    formData: { ...formData, slug: slug },
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch("/api/sheets-post", requestOptions)
    .then((response) => response.json())
    .then((response) => console.log(response));

  return true;
}

function sendEmailNotification() {
  const body = {
    auth: process.env.API_AUTH_TOKEN,
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch("/api/dispatch-email", requestOptions)
    .then((response) => response.json())
    .then((response) => console.log(response));
}
