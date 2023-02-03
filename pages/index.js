import Button from "../components/Button";
import Chip from "../components/Chip";

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
    </>);
}
