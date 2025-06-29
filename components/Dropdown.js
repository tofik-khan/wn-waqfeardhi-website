import React from "react";

import styled from "styled-components";
import Select from "react-select";

const StyledLabel = styled.label`
  /* Text */
  color: ${(props) => (props.isError ? "red" : "black")};
`;

const StyledMessage = styled.span`
  /* Text  */
  color: ${(props) => (props.isError ? "red" : "black")};
  font-size: 12px;
`;

const customStyle = {
  control: (baseStyles, _state) => ({
    ...baseStyles,
    marginTop: "8px",
    marginBottom: "8px",
    border: "solid 1px #fa541c33",
    "&:hover": {
      boxShadow: "0px 0px 4px #fa541c",
      cursor: "pointer",
    },
  }),
};

export default ({
  defaultValue,
  isSearchable,
  isDisabled,
  isLoading,
  onChange,
  options,
  label,
  error,
}) => {
  return (
    <>
      {label && (
        <>
          <StyledLabel isError={error?.isError} htmlFor="input-field">
            {label}
          </StyledLabel>{" "}
          <br />{" "}
        </>
      )}
      <Select
        defaultValue={
          defaultValue === false ? null : defaultValue || options[0]
        }
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        isLoading={isLoading}
        onChange={onChange}
        options={options}
        styles={customStyle}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#fa541c22",
            primary: "#fa541c",
          },
        })}
      />
      {error?.isError && (
        <StyledMessage isError={error?.isError}>
          {errorMessage || "There is some issue, check the input"}
        </StyledMessage>
      )}
    </>
  );
};
