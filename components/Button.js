import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${ props => props.type === "primary" ? "#607EEB" : "#EEEEEE" };

    /* Size */
    height: 50px;
    min-width: 180px;

    /* Padding */
    padding: 0px 50px;

    /* Border */
    border: ${ props => props.type === "primary" ? "unset" : "solid 1px #AAAAAA" };
    border-radius: 4px;

    /* Text */
    color: ${ props => props.type === "primary" ? "white" : "#6D6D6D" } ;
    font-weight: bold;
    font-size: 16px;

    /* States */
    &:hover {
        background-color: ${ props => props.type === "primary" ? "#2B4BBA" : "#CBCBCB" };
        cursor: pointer;
    }
    &:focus {
        background-color: ${ props => props.type === "primary" ? "#607EEB" : "#CBCBCB" }
        border: 2px solid ${ props => props.type === "primary" ? "#2B4BBA" : "#757575" };
        box-shadow: 0px 0px 4px 1px ${ props => props.type === "primary" ? "#2B4BBA" : "#595959" };
    }
`

export default function Button ({type, children}) {
    return <StyledButton type={type}>{children}</StyledButton>
}