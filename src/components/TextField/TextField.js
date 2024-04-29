import './TextField.css'

export const TextField = (props) => {
    const placeholder = `Digite o seu ${props.placeholder}...`
    return(
        <div className='text-field-container'>
            <label className='label'>{props.label}</label>
            <input required = {props.notNull} placeholder = {placeholder} className='input'></input>
        </div>
    )
}