import styled from "styled-components";

const StyledWrapper = styled.div`

    /* Border */
    border: solid 2px #607EEB;
    border-radius: 4px;

    /* Padding */
    padding: 32px 16px;


`

function Card () {
    return (
        <>
            <StyledWrapper>
                <h2>Test</h2>
            </StyledWrapper>
        </>
    )
}

export default Card;