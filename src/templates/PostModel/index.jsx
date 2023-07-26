import styles from './PostModel.module.css'
import posts from '../../json/posts.json'
import PostCard from '../../components/PostCard';

export default function PostModel({ fotoCapa, titulo, children, displayedPost }) {
    
    const reccomendations = posts
        .filter((post) => {return post !== displayedPost})
        .sort(() => { return Math.random() - 0.5 })
        .slice(0, 4);
    
    return (
        <article className={styles.postModeloContainer}>
            <main>
                <img
                    className={styles.fotoCapa}
                    style={{ backgroundImage: `url(${fotoCapa})` }}
                />
                <h2 className={styles.titulo}>
                    {titulo}
                </h2>
                <div className={styles.postConteudoContainer}>
                    {children}
                </div>
            </main>

            <footer>
                <h3 className={styles.tituloRecomendacao}>
                    Outros posts que você pode gostar:
                </h3>
                <ul className={styles.postsRecomendacao}>
                    {reccomendations.map((post) => {
                        return (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                    )})}
                </ul>
            </footer>
        </article>
    )
}