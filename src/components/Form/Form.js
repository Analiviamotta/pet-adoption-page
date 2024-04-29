import Button from '../Button'
import ListOptions from '../ListOptions'
import TextField from '../TextField'
import './Form.css'
export const Form = () => {
    const petAdoptionList = [
        'Lola',
        'Nevora',
        'Frida',
        'Camões',
        'Thor',
        'Atena'
    ]
    return (
        <section className='form-container'>
            <form>
                <h1>Deixe sua mensagem para um dos animais disponíveis</h1>
                <TextField notNull = {true} label="nome" placeholder="nome"></TextField>
                <TextField label="Mensagem" placeholder="mensagem"></TextField>
                <ListOptions 
                    label= "Escolha um animal" 
                    options= {petAdoptionList}>
                </ListOptions>
                <Button>Enviar</Button>
            </form>
        </section>
    )
}