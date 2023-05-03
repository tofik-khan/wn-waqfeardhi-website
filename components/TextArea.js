import React from "react";

import styled from "styled-components";

const StyledLabel = styled.label`

    /* Text */
    color: ${props => props.isError? "red" : "black"} ;

`

const StyledTextArea = styled.textarea`
  /* Size */
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100px")};

  /* Padding */
  padding-left: 8px;

  /* Border */
  border: 2px solid ${(props) => (props.isError ? "red" : "#607EEB")};
  border-radius: 4px;

  &:hover {
    /* Shadow */
    box-shadow: 0px 0px 4px ${(props) => (props.isError ? "red" : "#607EEB")};
  }

  &:focus {
    outline: none;

    /* Border */
    border: 2px solid ${(props) => (props.isError ? "red" : "#607EEB")};
    border-radius: 4px;
  }
`;

const StyledMessage = styled.span`

    /* Text  */
    color: ${props => props.isError? "red" : "black"} ;
    font-size: 12px;
`

export default function TextArea ({label, width, placeholder, onChange, isError, errorMessage}) {
    return (
        <>
                { label && <><StyledLabel isError={isError} htmlFor="input-field">{label}</StyledLabel>  <br /> </>}
                <StyledTextArea width={width} type="text" placeholder={placeholder} onChange={onChange} isError={isError}/><br/>
                { isError && <StyledMessage isError={isError}>{errorMessage || "There is some issue, check the input"}</StyledMessage> }
        </>
    )
}