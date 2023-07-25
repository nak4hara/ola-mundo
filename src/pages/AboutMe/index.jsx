import styles from './AboutMe.module.css'
import PostModel from "../../templates/PostModel";
import fotoCapa from '../../assets/sobre_mim_capa.png'
import minhaFoto from '../../assets/foto_sobre_mim.jpg'


export default function AboutMe() {
    return (
        <div>
            <PostModel
                fotoCapa={fotoCapa}
                titulo="Sobre mim"
            >
                <h3 className={styles.subtitulo}>
                    Ola, eu sou a Karina.
                </h3>
                <img
                    className={styles.fotoSobreMim}
                    src={minhaFoto}
                    alt="Karina sorrindo na frente do castelo Neuschwanstein"
                />
                <p className={styles.paragrafo}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, eum iusto excepturi, voluptatum illum similique aliquid accusantium facere dolorem molestias saepe. Quas, odio incidunt dolore quo nostrum commodi autem rerum?
                </p>
                <p className={styles.paragrafo}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, eum iusto excepturi, voluptatum illum similique aliquid accusantium facere dolorem molestias saepe. Quas, odio incidunt dolore quo nostrum commodi autem rerum?
                </p>
                <p className={styles.paragrafo}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, eum iusto excepturi, voluptatum illum similique aliquid accusantium facere dolorem molestias saepe. Quas, odio incidunt dolore quo nostrum commodi autem rerum?
                </p>
                <p className={styles.paragrafo}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, eum iusto excepturi, voluptatum illum similique aliquid accusantium facere dolorem molestias saepe. Quas, odio incidunt dolore quo nostrum commodi autem rerum?
                </p>
            </PostModel>
        </div>
    )
}