import React from "react";

import styled from "styled-components";
import Select from 'react-select';

const StyledLabel = styled.label`

    /* Text */
    color: ${props => props.isError? "red" : "black"} ;

`

const StyledMessage = styled.span`

    /* Text  */
    color: ${props => props.isError? "red" : "black"} ;
    font-size: 12px;
`

const customStyle = {
    control: (baseStyles, _state) => ({
      ...baseStyles,
      border: "solid 2px #607EEB",
      "&:hover": {
        boxShadow: "0px 0px 4px #607EEB",
        cursor: "pointer"
      }
    })
  }

export default ({defaultValue, isSearchable, isDisabled, isLoading, onChange, options, label, error}) => {

    return (
        <>
            { label && <><StyledLabel isError={error?.isError} htmlFor="input-field">{label}</StyledLabel>  <br /> </>}
            <Select
                defaultValue={defaultValue || options[0]}
                isDisabled={isDisabled}
                isSearchable={isSearchable}
                isLoading={isLoading}
                onChange={onChange}
                options={options}
                styles={customStyle}
            />
            { error?.isError && <StyledMessage isError={error?.isError}>{errorMessage || "There is some issue, check the input"}</StyledMessage> }
        </>
    )
}