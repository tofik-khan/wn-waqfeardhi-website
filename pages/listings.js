

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Card from "../components/Card"
import Chip from "../components/Chip"
import Button from "../components/Button"





export default function Page () {
    return (
        <>
            <h1 className="py-5 text-center">Job Postings</h1>
            <Container>
                <Row>
                    <Col md={4} lg={6}>
                        <Card >
                            <Card.Heading>Web Development</Card.Heading>
                            <Card.SubHeading>Sira-e-Khidmat, Silver Spring MD, 9999</Card.SubHeading>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                                <div><Chip label="No Experience" marginRight="4px" /><Chip marginRight="4px" /></div>
                                <div className="pt-2"><Button variant="primary" size="small">Test Button</Button></div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} lg={6}>
                        <Card >
                            <Card.Heading>Web Development</Card.Heading>
                            <Card.SubHeading>Sira-e-Khidmat, Silver Spring MD, 9999</Card.SubHeading>
                            <Card.Body>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
                                <div><Chip label="No Experience" marginRight="4px" /><Chip marginRight="4px" /></div>
                                <div className="pt-2"><Button variant="primary" size="small">Test Button</Button></div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}