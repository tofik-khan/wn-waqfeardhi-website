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
            />
            { error?.isError && <StyledMessage isError={error?.isError}>{errorMessage || "There is some issue, check the input"}</StyledMessage> }
        </>
    )
}