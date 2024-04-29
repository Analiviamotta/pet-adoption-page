import TextField from '../TextField'
import './Form.css'
export const Form = () => {
    return (
        <section className='form-container'>
            <h2>Deixe sua mensagem aqui e veja o que acontece</h2>
            <form>
                <TextField label="nome" placeholder="nome"></TextField>
                <TextField label="Mensagem" placeholder="mensagem"></TextField>
            </form>
        </section>
    )
}