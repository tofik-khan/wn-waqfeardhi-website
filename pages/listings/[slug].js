import { useRouter } from 'next/router';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { getData, TITLE, SUBTITLE, DESCRIPTION, SLUG, TAGS } from "/pages/api/get-listings-data";

import TextInput from "/components/TextInput";

export default function Page () {
  const router = useRouter()
  const { slug } = router.query

  const listings = getData();

  const selectedListing = listings.filter((element) => element[SLUG] === slug)[0];
  console.log(selectedListing);
  if(selectedListing.length === 0) {
    return <h1>Listing not Found</h1>
  }
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
                <Col sm={6}><TextInput label="First Name" /></Col>
                <Col sm={6}><TextInput label="Last Name" /></Col>
            </Row>
            <Row className='py-2'>
                <Col sm={6}><TextInput label="Email" /></Col>
                <Col sm={6}><TextInput label="Phone Number" /></Col>
            </Row>
        </Container>
    </>
  );
}