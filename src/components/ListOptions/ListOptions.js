import "./ListOptions.css"
export const ListOptions = (props) => {
    return(
        <div className="list-options-container">
            <label>
                {props.label}
            </label>

            <select>
                {props.options.map(option => <option key={option}>{option}</option>)}
            </select>
        </div>
    )
}
