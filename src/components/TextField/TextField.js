import './TextField.css'

export const TextField = (props) => {
    const placeholder = `Digite o seu ${props.placeholder}...`
    return(
        <div text-field-container>
            <label className='label'>
                {props.label}
            </label>

            <input placeholder = {placeholder} className='input'>
            </input>
        </div>
    )
}