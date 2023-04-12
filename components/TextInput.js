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
    padding-top: 6px;
    padding-bottom: 6px;

    /* Border */
    border: 2px solid ${props => props.isError? "red" : "#607EEB"} ;
    border-radius: 4px;

    &:hover {

        /* Shadow */
        box-shadow: 0px 0px 4px ${props => props.isError? "red" : "#607EEB"} ;
    }

    &:focus {
        
        outline: none;

        /* Border */
        border: 2px solid ${props => props.isError? "red" : "#607EEB"} ;
        border-radius: 4px;
    }

`

const StyledMessage = styled.span`

    /* Text  */
    color: ${props => props.isError? "red" : "black"} ;
    font-size: 12px;
`

// Todo: Convert isError & errorMessage to an object { error: true; message: "error Message"}
function Input({
  label,
  width,
  placeholder,
  onChange,
  isError,
  errorMessage,
  required,
}) {
  return (
    <>
      {label && (
        <>
          <StyledLabel isError={isError} htmlFor="input-field">
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </StyledLabel>{" "}
          <br />{" "}
        </>
      )}
      <StyledInput
        width={width}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        isError={isError}
      />
      <br />
      {isError && (
        <StyledMessage isError={isError}>
          {errorMessage || "There is some issue, check the input"}
        </StyledMessage>
      )}
    </>
  );
}

export default Input;