import styled from "styled-components";

const StyledWrapper = styled.div`

    /* Border */
    border: solid 2px #607EEB;
    border-radius: 4px;

    /* Padding */
    padding: 12px 16px;


`

const StyledHeading = styled.h3`

    /* Text */
    font-weight: bold;
    font-size: 20px;

    /* Margins */
    margin-bottom: 0px;
`

const StyledSubHeading = styled.p`

    /* Margins */
    margin-top: 0px;
    margin-bottom: 0px;

    /* Text */
    font-style: italic;
`

function Body ({children}) {
    return (
        <>
            {children}
        </>
    )
}

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

function SubHeading ({children}) {
    return (
        <>
            <StyledSubHeading>
                {children}
            </StyledSubHeading>
        </>
    )
}

Card.Heading = Heading;
Card.SubHeading = SubHeading;
Card.Body = Body;

export default Card;