import styled from "styled-components";

const StyledButton = styled.button`

    all: unset;

    background-color: ${ props => props.variant === "primary" ? "#607EEB" : "#EEEEEE" };

    /* Size */
    height: ${ props => props.size === "small" ? "30px" : "50px" };

    /* Padding */
    padding: 0px ${ props => props.size === "small" ? "20px" : "36px" };

    /* Border */
    border: ${ props => props.variant === "primary" ? "unset" : "solid 1px #AAAAAA" };
    border-radius: 4px;

    /* Text */
    color: ${ props => props.variant === "primary" ? "white" : "#6D6D6D" } ;
    font-weight: bold;
    font-size: 16px;

    /* States */
    &:hover {
        background-color: ${ props => props.variant === "primary" ? "#2B4BBA" : "#CBCBCB" };
        cursor: pointer;
    }
    &:focus {
        background-color: ${ props => props.variant === "primary" ? "#607EEB" : "#CBCBCB" };
        border: 2px solid ${ props => props.variant === "primary" ? "#2B4BBA" : "#757575" };
        box-shadow: 0px 0px 4px 1px ${ props => props.variant === "primary" ? "#2B4BBA" : "#595959" };
    }
`

export default function Button ({variant, children, size}) {
    return <StyledButton variant={variant} size={size}>{children}</StyledButton>
}
