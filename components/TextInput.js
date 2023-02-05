import styled from "styled-components";

const StyledInput = styled.input`

    /* Size */
    width: ${props => props.width? `${props.width}px` : "100%" };

    /* Padding */
    padding-left: 8px;
`


function Input ({label, width}) {
    return (
        <>
            <div>
                { label && <><label htmlFor="input-field">{label}</label>  <br /> </>}
                <StyledInput width={width} type="text" />
            </div>
        </>
    )
}

export default Input;