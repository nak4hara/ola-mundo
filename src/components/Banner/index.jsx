import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Eu sou uma pequena desenvolvedora de front-end. Me apaixonei por ReactJS e quero te ajudar a criar sites lindos e que funcionam. <br /> Also, I am almost fluent in english and I would be glad to help you in case you have an international team!
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}/>
                <img className={styles.minhaFoto} src='https://github.com/nak4hara.png'  alt='Foto de perfil da Karina'/>
            </div>

        </div>
    )
}