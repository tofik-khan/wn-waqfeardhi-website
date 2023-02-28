import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { getData, TITLE, SUBTITLE, DESCRIPTION, SLUG, TAGS } from "/pages/api/get-listings-data";

import TextInput from "/components/TextInput";
import Button from "/components/Button";

export default function Page () {
  const router = useRouter();
  const { slug } = router.query;

  const [listings, updateListings] = useState([]);
  const [formData, updateFormData] = useState({});
  const [screen, updateScreen] = useState("FORM");

  useEffect(() => {
    updateListings(getData());
  }, [])

  if(listings.length === 0) {
    return <h1>Loading</h1>
  }

  const selectedListing = listings.filter((element) => element[SLUG] === slug)[0];
  if(selectedListing.length === 0) {
    return <h1>Listing not Found</h1>
  }


  if(screen === "FORM") {
    return (
        <>
            <h1 className="py-5 text-center">{selectedListing[TITLE]}</h1>
            <p className='text-center'>{selectedListing[SUBTITLE]}</p>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10}>{selectedListing[DESCRIPTION]}</Col>
                </Row>
            </Container>
            <Container className='py-5'>
                <Row>
                    <h2>Submit Form</h2>
                </Row>
                <Row>
                    <Col sm={6}>
                        <TextInput 
                            label="First Name" 
                            isError={checkFirstnameError(formData)} 
                            errorMessage="This field cannot be left blank" 
                            onChange={(event) => updateFormData({...formData, firstname: event.target.value})}
                        />
                    </Col>
                    <Col sm={6}>
                        <TextInput 
                            label="Last Name"
                            isError={checkLastnameError(formData)} 
                            errorMessage="This field cannot be left blank" 
                            onChange={(event) => updateFormData({...formData, lastname: event.target.value})}
                        />
                    </Col>
                </Row>
                <Row className='py-2'>
                    <Col sm={6}>
                        <TextInput 
                            label="Email"
                            isError={false} //Todo: Figure out how to determine if email is valid on submit?
                            errorMessage="This must be a valid email"
                            onChange={(event) => updateFormData({...formData, email: event.target.value})}
                        />
                    </Col>
                    <Col sm={6}><TextInput label="Phone Number" onChange={(event) => updateFormData({...formData, phone: event.target.value})}/></Col>
                </Row>
                <Row>
                    <Col><Button variant="primary" onClick={() => {submitForm(formData, slug); updateScreen("SUBMITTED")}}>Submit</Button></Col>
                </Row>
            </Container>
        </>
    );
  }

  else if (screen === "SUBMITTED") {
    return (
        <>
            <h1>Submitted</h1>
        </>
    )
  }
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
