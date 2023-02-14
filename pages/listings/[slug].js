import { useRouter } from 'next/router';

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { getData, TITLE, SUBTITLE, DESCRIPTION, SLUG, TAGS } from "/pages/api/get-listings-data";

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
        <Container>
            <Row>
                <Col>{selectedListing[DESCRIPTION]}</Col>
            </Row>
        </Container>
    </>
  );
}