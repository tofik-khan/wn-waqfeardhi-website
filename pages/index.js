import { Star } from "react-bootstrap-icons";
import Button from "../components/Button";
import Chip from "../components/Chip";
import TextInput from "../components/TextInput";
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
                <Col xs={6}>
                <Card >
                    <Card.Heading>Test Heading 1</Card.Heading>
                    <Card.SubHeading>This is a test SubHeading</Card.SubHeading>
                    <Card.Body>
                        <p>This is a sample body</p>
                        <div><Chip variant="solid" icon={<Star fill="currentColor" />} iconPosition="right"></Chip><Chip variant="solid" icon={<Star fill="currentColor" />} iconPosition="right"></Chip><Chip variant="solid" icon={<Star fill="currentColor" />} iconPosition="right"></Chip></div>
                        <div className="pt-2"><Button variant="primary" size="small">Test Button</Button></div>
                    </Card.Body>
                </Card>
                </Col>
                <Col xs={6}>
                <Card >
                    <Card.Heading>Test Heading 3</Card.Heading>
                    <Card.SubHeading>This is a test SubHeading</Card.SubHeading>
                </Card>
                </Col>
            </Row>
        </Container>
        <Container>
            <h2>Text Input</h2>
            <Row>
                <Col xs={6}><TextInput label="Sample Lable" /></Col>
                <Col xs={6}><TextInput label="Fixed Width" width={30} /></Col>
                <Col xs={6}><TextInput label="Placeholder" placeholder="This is placeholder" /></Col>
                <Col xs={6}><TextInput label="Error State" isError={true} errorMessage="Check Input" /></Col>
            </Row>
        </Container>
    </>);
}
