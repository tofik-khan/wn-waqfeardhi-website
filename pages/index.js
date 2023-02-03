import Button from "../components/Button";
import Chip from "../components/Chip";
import { FiletypePdf } from "react-bootstrap-icons";

export default function Page() {
    return (
    <>
        <h1>Hello, Next.js!</h1>
        <Button variant="primary">Test Button</Button>
        <br />
        <br />
        <Button variant="secondary">Test Button</Button>
        <br />
        <br />
        <Chip></Chip>
        <br />
        <br />
        <Chip variant="solid"></Chip>
        <Chip variant="solid" icon={<FiletypePdf fill="currentColor" size={20} />} iconPosition="right"></Chip>
    </>);
}
