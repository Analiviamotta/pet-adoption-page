import Button from '../Button'
import TextField from '../TextField'
import './Form.css'
export const Form = () => {
    return (
        <section className='form-container'>
            <form>
                <h1>Deixe sua mensagem aqui e veja o que acontece</h1>
                <TextField label="nome" placeholder="nome"></TextField>
                <TextField label="Mensagem" placeholder="mensagem"></TextField>
                <Button text = "Enviar"></Button>
            </form>
        </section>
    )
}