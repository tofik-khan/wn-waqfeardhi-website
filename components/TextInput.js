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

    ${props => props.isError? "border: solid 2px red" : ""} ;
    border-radius: 4px;

`


function Input ({label, width, placeholder, onChange, isError, errorMessage}) {
    return (
        <>
            <div>
                { label && <><StyledLabel isError={isError} htmlFor="input-field">{label}</StyledLabel>  <br /> </>}
                <StyledInput width={width} type="text" placeholder={placeholder} onChange={onChange} isError={isError}/><br/>
                { isError && <span>{errorMessage || "There is some issue, check the input"}</span> }
            </div>
        </>
    )
}

export default Input;