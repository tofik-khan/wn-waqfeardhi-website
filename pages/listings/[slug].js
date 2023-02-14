import { useRouter } from 'next/router';
import { useState } from 'react';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { getData, TITLE, SUBTITLE, DESCRIPTION, SLUG, TAGS } from "/pages/api/get-listings-data";

import TextInput from "/components/TextInput";
import Button from "/components/Button";

export default function Page () {
  const router = useRouter()
  const { slug } = router.query

  if(listings.length === 0) {
    return <h1>Loading</h1>
  }

  const selectedListing = listings.filter((element) => element[SLUG] === slug)[0];
  if(selectedListing.length === 0) {
    return <h1>Listing not Found</h1>
  }

  const [formData, updateFormData] = useState({});
  console.log(formData)

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
                <Col sm={6}><TextInput label="First Name" onChange={(event) => updateFormData({...formData, firstname: event.target.value})}/></Col>
                <Col sm={6}><TextInput label="Last Name"  onChange={(event) => updateFormData({...formData, lastname: event.target.value})}/></Col>
            </Row>
            <Row className='py-2'>
                <Col sm={6}><TextInput label="Email" onChange={(event) => updateFormData({...formData, email: event.target.value})}/></Col>
                <Col sm={6}><TextInput label="Phone Number" onChange={(event) => updateFormData({...formData, phone: event.target.value})}/></Col>
            </Row>
            <Row>
                <Col><Button variant="primary" onClick={() => console.log(formData)}>Submit</Button></Col>
            </Row>
        </Container>
    </>
  );
}