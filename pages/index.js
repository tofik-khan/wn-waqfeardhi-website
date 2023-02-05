import { Star } from "react-bootstrap-icons";
import Button from "../components/Button";
import Chip from "../components/Chip";
import Container from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col"
import Card from "../components/Card";

export default function Page() {
    return (
    <>
        <h1>Hello, Next.js!</h1>
        <Button variant="primary">Test Button</Button>
        <Button variant="primary" size="small">Test Button</Button>
        <br />
        <br />
        <Button variant="secondary">Test Button</Button>
        <Button variant="secondary" size="small">Test Button</Button>
        <br />
        <br />
        <Chip></Chip>
        <Chip icon={<Star fill="currentColor" />} iconPosition="right"></Chip>
        <br />
        <br />
        <Chip variant="solid"></Chip>
        <Chip variant="solid" icon={<Star fill="currentColor" />} iconPosition="right"></Chip>

        <Container className="py-5">
            <Row>
                <Col xs={4}>
                <Card >
                    <Card.Heading>Test Heading 1</Card.Heading>
                </Card>
                </Col>
                <Col xs={4}>
                    <Card >
                        <Card.Heading>Test Heading 2</Card.Heading>
                    </Card>
                </Col>
                <Col xs={4}>
                <Card >
                    <Card.Heading>Test Heading 3</Card.Heading>
                </Card>
                </Col>
            </Row>
        </Container>
    </>);
}
