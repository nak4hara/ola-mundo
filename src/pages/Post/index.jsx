import './Post.css'
import { useParams } from "react-router-dom"
import posts from '../../json/posts.json'
import PostModel from "../../templates/PostModel";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PaginaPadrao from '../../templates/PaginaPadrao';
import NotFound from '../NotFound';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NotFound />
    }
    return (
        <PaginaPadrao>
            <PostModel
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
                displayedPost={post}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModel>
        </PaginaPadrao>
    )
}

{/*Solução para nao aparecer o banner no error 404 ao achar os posts:
    Englobar a rota do modelo de post pela pag padrao
    Pois caso dê erro, o /posts/qualquercoisa não está dentro do pai pag padrao
    Somente daquelas rotas que já existem quando retorna o <NotFound/> na pagina */}