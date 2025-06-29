import styled from "styled-components";

import { useState } from "react";

const inlineLabel = `
display: flex;
align-items: center;
gap: 10px;
`;

const StyledLabel = styled.label`
  ${(props) => (props.labelPosition === "bottom" ? "" : inlineLabel)}
  cursor: pointer;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Switch = styled.div`
  margin-top: ${(props) => (props.labelPosition === "bottom" ? "4px" : "")};
  position: relative;
  width: 68px;
  height: 36px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.checked ? "#fa541c" : "#b3b3b3")};
    ${(props) => (props.checked ? "content: 'Y'" : "content: 'N'")};
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: #fa541c;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`;

export default ({ label, labelPosition, defaultValue, onChange }) => {
  const [checked, setChecked] = useState(defaultValue || false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    onChange && onChange(event);
  };

  // Todo: Add ability to modify toggle's indicators. Currently set to Y/N
  return (
    <StyledLabel labelPosition={labelPosition || "inline"} checked={checked}>
      <span className="body2">{label}</span>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch labelPosition={labelPosition || "inline"} checked={checked} />
    </StyledLabel>
  );
};
