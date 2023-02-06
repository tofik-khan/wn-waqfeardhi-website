import styled from "styled-components";

const StyledLabel = styled.label`

    /* Text */
    color: ${props => props.isError? "red" : "black"} ;

`

const StyledInput = styled.input`

    /* Size */
    width: ${props => props.width? `${props.width}px` : "100%" };

    /* Padding */
    padding-left: 8px;

    /* Border */
    ${props => props.isError? "border: solid 2px red" : ""} ;
    border-radius: 4px;

`

const StyledMessage = styled.span`

    /* Text  */
    color: ${props => props.isError? "red" : "black"} ;
`

function Input ({label, width, placeholder, onChange, isError, errorMessage}) {
    return (
        <>
                { label && <><StyledLabel isError={isError} htmlFor="input-field">{label}</StyledLabel>  <br /> </>}
                <StyledInput width={width} type="text" placeholder={placeholder} onChange={onChange} isError={isError}/><br/>
                { isError && <StyledMessage isError={isError}>{errorMessage || "There is some issue, check the input"}</StyledMessage> }
        </>
    )
}

export default Input;