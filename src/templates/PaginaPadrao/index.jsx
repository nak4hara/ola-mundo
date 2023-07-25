import { Outlet } from "react-router-dom";
import Banner from '../../components/Banner'

export default function PaginaPadrao({ children }) {
    return (
        <main>
            <Banner />

            <Outlet />

            {children}

            {/*
            ---------- Rotas aninhadas ---------
            Permite que seja usado como template
            -> Se olhar no arquivo routes.jsx,
            essa rota se torna pai das outras que
            vai ter a mesma estrutura.
            Porém, o outlet renderiza o conteudo dos elementos filhos
            Antes dele, os componentes renderizados estarão em todos os filhos.
            */}
        </main>
    )
}