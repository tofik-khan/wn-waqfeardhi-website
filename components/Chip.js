import styled from "styled-components";

const StyledWrapper = styled.div`
    background-color: ${ props => props.variant === "solid" ? "#607EEB" : "transparent" };

    /* Size */
    min-height: 30px;
    min-width: 70px;

    /* Padding */
    padding: 0px 8px;

    /* Border */
    border: solid 1px ${ props => props.variant === "solid" ? "#8D9CD2" : "#607EEB" };
    border-radius: 4px;

    /* Text */
    color: ${ props => props.variant === "solid" ? "white" : "black" };
    

    /* Flexbox */
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-left: 10px;
`

const StyledText = styled.span`
    padding: 0px 4px;
    font-size: 14px;
`

const StyledIcon = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    height: 20px;
    width: 20px;
`

export default function Chip({variant, icon, iconPosition}) {
    return (<>
        <StyledWrapper variant={variant}>
            {icon && iconPosition === "left" ? <StyledIcon>{icon}</StyledIcon> : null}
            <StyledText>Test</StyledText>
            {icon && iconPosition === "right" ? <StyledIcon>{icon}</StyledIcon> : null}
        </StyledWrapper>     
    </>)
}
