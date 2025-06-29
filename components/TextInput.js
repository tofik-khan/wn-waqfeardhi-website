import styled from "styled-components";

const StyledLabel = styled.label`
  /* Text */
  color: ${(props) => (props.isError ? "red" : "black")};
`;

const StyledInput = styled.input`
  margin-top: 8px;
  margin-bottom: 8px;

  /* Size */
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};

  /* Padding */
  padding-left: 8px;
  padding-top: 6px;
  padding-bottom: 6px;

  /* Border */
  ${(props) =>
    props.isError ? "border: 2px solid red" : "border: 1px solid #fa541c33"};
  border-radius: 8px;

  &:hover {
    /* Shadow */
    box-shadow: 0px 0px 2px ${(props) => (props.isError ? "red" : "#fa541c")};
  }

  &:focus {
    outline: none;

    /* Border */
    border: 1px solid ${(props) => (props.isError ? "red" : "#fa541c")};
    border-radius: 4px;
  }
`;

const StyledMessage = styled.p`
  /* Text  */
  color: ${(props) => (props.isError ? "red" : "black")};
  font-size: 12px;
`;

// Todo: Convert isError & errorMessage to an object { error: true; message: "error Message"}
function Input({
  label,
  width,
  placeholder,
  onChange,
  isError,
  errorMessage,
  required,
  type,
}) {
  return (
    <>
      {label && (
        <>
          <StyledLabel
            className={"body2"}
            isError={isError}
            htmlFor="input-field"
          >
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </StyledLabel>{" "}
          <br />{" "}
        </>
      )}
      <StyledInput
        width={width}
        type={type || "text"}
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
