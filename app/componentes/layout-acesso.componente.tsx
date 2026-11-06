import { Titulo } from "./titulo.componente";

// Layout das telas de login e cadastro (sem barra lateral)
export default function LayoutAcesso(props: any) {
    return (
        <div className="flex min-h-screen">
            <section className="acesso-visual">
                <h1 className="text-sm font-bold tracking-[0.3em]">ELITE VEÍCULOS</h1>
                <div>{props.rodapeVisual}</div>
            </section>

            <section className="acesso-painel">
                <div className="flex justify-between items-center p-6 border-b border-neutral-200 text-xs uppercase tracking-widest text-neutral-400">
                    {props.cabecalho}
                </div>
                <div className="flex flex-col gap-6 p-10 flex-1 justify-center">
                    <Titulo principal={props.titulo} subtitulo={props.subtitulo}/>
                    {props.children}
                </div>
                <div className="flex justify-between p-6 border-t border-neutral-200 text-xs text-neutral-400">
                    <span>© 2026 Elite Veículos</span>
                    <span>Privacidade · Termos</span>
                </div>
            </section>
        </div>
    )
}
