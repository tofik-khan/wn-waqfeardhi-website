import styled from "styled-components";

const StyledWrapper = styled.div`
    background-color: ${ props => props.variant === "solid" ? "#607EEB" : "transparent" };

    /* Size */
    height: 30px;
    min-width: 70px;

    /* Padding */
    padding: 0px 8px;

    /* Border */
    border: solid 1px ${ props => props.variant === "solid" ? "#8D9CD2" : "#607EEB" };
    border-radius: 4px;

    /* Flexbox */
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

const StyledIcon = styled.img`
`

const StyledText = styled.span`
`

export default function Chip({variant}) {
    return (<>
        <StyledWrapper variant={variant}>
            <p>Test</p>
            <p>Test2</p>
        </StyledWrapper>
    </>)
}