import { Titulo } from "./titulo.componente";
import { Menu } from "./menu.componente";
import { Calculator, Car, LogOut, User } from "lucide-react";

const itensMenu = [
    {texto: "Catálogo", link: "/catalogo", icone: Car},
    {texto: "Simulador", link: "/simulador", icone: Calculator},
    {texto: "Meu perfil", link: "/perfil", icone: User},
    {texto: "Sair", link: "/", icone: LogOut},
]

export default function Pagina(props: any) {
    return (
        <div className="flex min-h-screen">
            <aside className="barra-lateral">
                <h1 className="text-sm font-bold tracking-[0.3em]">ELITE VEÍCULOS</h1>
                <Menu itens={itensMenu}/>
            </aside>
            <main className="conteudo-pagina">
                <Titulo
                    principal={props.titulo}
                    subtitulo={props.subtitulo}
                />
                <div className="flex flex-col gap-6">
                    {props.children}
                </div>
            </main>
        </div>
    )
}
