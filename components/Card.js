import styled from "styled-components";

const StyledWrapper = styled.div`

    /* Border */
    border: solid 2px #607EEB;
    border-radius: 4px;

    /* Padding */
    padding: 12px 16px;


`

const StyledHeading = styled.h3`

    /* Reset Settings */
    all: unset;

    /* Text */
    font-weight: bold;
`

function Card ({children}) {
    return (
        <>
            <StyledWrapper>
                {children}
            </StyledWrapper>
        </>
    )
}

function Heading ({children}) {
    return (
        <>
            <StyledHeading>
                {children}
            </StyledHeading>
        </>
    )
}

Card.Heading = Heading

export default Card;