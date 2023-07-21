import styles from './Rodape.module.css'
import MarcaRegistrada from '../../assets/marca_registrada.svg'

export default function Rodape() {
    return(
        <footer className={styles.rodape}>
            <img src={MarcaRegistrada} alt='Símbolo da marca registrada' />
            <span>Desenvolvido por Alura.</span>
        </footer>
    )
}