
function Input ({label}) {
    return (
        <>
            <div>
                { label && <><label htmlFor="input-field">{label}</label>  <br /> </>}
                <input type="text" />
            </div>
        </>
    )
}

export default Input;