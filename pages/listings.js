import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Card from "../components/Card"
import Chip from "../components/Chip"
import Button from "../components/Button"

import { getData, TITLE, SUBTITLE, DESCRIPTION, SLUG, TAGS } from "./api/get-listings-data"

const displayChips =  (tagArray) => {
    const tags = tagArray.split(',');
    const chips = tags.map((element, i) => (<Chip label={element} key={i} marginRight="4px" />));
    return chips;
}



export default function Page () {

    const listings = getData();

    return (
        <>
            <h1 className="py-5 text-center">Job Postings</h1>
            <Container>
                <Row>
                    {listings.map((listing) => {
                        return ( <Col md={6} key={listing[SLUG]} className="pt-3">
                            <Card >
                                <Card.Heading>{listing[TITLE]}</Card.Heading>
                                <Card.SubHeading>{listing[SUBTITLE]}</Card.SubHeading>
                                <Card.Body>
                                    <p>{listing[DESCRIPTION]}</p>
                                    <div>{displayChips(listing[TAGS])}</div>
                                    <div className="pt-2"><Button variant="primary" size="small">Test Button</Button></div>
                                </Card.Body>
                            </Card>
                        </Col>)
                    })}
                </Row>
            </Container>
        </>
    )
}