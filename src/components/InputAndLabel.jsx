

const InputAndLabel = ({labelText, inputText, type}) => {
    return(
        <div className="inputLabel">
            <label htmlFor="firstname" className="inputLabel-label">{labelText}</label> <br />
            <input type={type} name="firstname" id="firstname" placeholder={inputText} className="inputLabel-input" />
        </div>
    )
}

export default InputAndLabel;