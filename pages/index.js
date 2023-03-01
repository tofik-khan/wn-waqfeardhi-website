import { Star } from "react-bootstrap-icons";
import Button from "../components/Button";
import Chip from "../components/Chip";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";
import ToggleSwitch from "../components/ToggleSwitch";
import TextArea from "../components/TextArea";
import Container from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col"
import Card from "../components/Card";

export default function Page() {

    const dropdownOptions = [
        { value: "Option1", label: "Option1" },
        { value: "Option2", label: "Option2" },
        { value: "Option3", label: "Option3" },
        { value: "Option4", label: "Option4" },
        { value: "Option5", label: "Option5" },
    ]

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
        <Button variant="secondary" href="/listings">Test Link</Button>
        <Button variant="secondary" href="/listings" size="small">Test Link</Button>
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
                <Col xs={6}><TextInput label="Sample Lable" onChange={(event) => console.log(event.target.value)}/></Col>
                <Col xs={6}><TextInput label="Fixed Width" width={30} /></Col>
                <Col xs={6}><TextInput label="Placeholder" placeholder="This is placeholder" /></Col>
                <Col xs={6}><TextInput label="Error State" isError={true} errorMessage="Check Input" /></Col>
            </Row>
        </Container>
        <Container>
            <h2>Dropdown</h2>
            <Row>
                <Col xs={6}><Dropdown options={dropdownOptions} label="test Label" onChange={(option) => console.log(option.value)}/></Col>
            </Row>
        </Container>
        <Container>
            <h2>Toggle Switch</h2>
            <Row>
                <Col xs={6}><ToggleSwitch label="Toggle Label" onChange={(event) => console.log(event.target.checked)}/></Col>
            </Row>
        </Container>
        <Container>
            <h2>TextArea</h2>
            <Row>
                <Col xs={6}><TextArea label="TextArea Label" onChange={(event) => console.log(event.target.checked)} isError={true}/></Col>
            </Row>
        </Container>
    </>);
}
