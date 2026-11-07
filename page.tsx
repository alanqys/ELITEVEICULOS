import Link from "next/link";
import LayoutAcesso from "./componentes/layout-acesso.componente";
import { Botao } from "./componentes/botao.componente";
import { CampoTexto } from "./componentes/campo-texto.componente";

export default function LoginPage(){
    return (
        <LayoutAcesso
            titulo="Entrar"
            subtitulo="Acesse sua conta Elite Veículos"
            cabecalho={
                <>
                    <span>Portal do cliente</span>
                    <Link href="/cadastro" className="acesso-link">Criar conta</Link>
                </>
            }
        >
            <CampoTexto rotulo="E-mail" tipo="email" dica="seu@email.com"/>
            <CampoTexto rotulo="Senha" tipo="password" dica="••••••••"/>
            <span className="acesso-link text-right">Esqueceu a senha?</span>

            <Link href="/catalogo" className="botao botao-primario">Acessar</Link>
            <span className="text-center text-xs text-gray-400">ou</span>
            <Botao texto="Continuar com Google" tipo="secundario"/>
        </LayoutAcesso>
    )
}
