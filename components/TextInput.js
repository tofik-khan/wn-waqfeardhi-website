import styled from "styled-components";

const StyledInput = styled.input`

    /* Size */
    width: ${props => props.width? `${props.width}px` : "100%" };

    /* Padding */
    padding-left: 8px;
`


function Input ({label, width, placeholder, onChange}) {
    return (
        <>
            <div>
                { label && <><label htmlFor="input-field">{label}</label>  <br /> </>}
                <StyledInput width={width} type="text" placeholder={placeholder} onChange={onChange}/>
            </div>
        </>
    )
}

export default Input;