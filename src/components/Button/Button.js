import './Button.css'
export const Button = (props) => {
    return(
        <button className='button-container'>{props.children}</button>
    )
}