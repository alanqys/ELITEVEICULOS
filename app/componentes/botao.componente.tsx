type BotaoProps = {
    texto: string,
    tipo?: string,
    aoClicar?: () => void
}

export function Botao(props: BotaoProps){

    const tipo = props.tipo ?? "primario"

    return (
        <button className={`botao botao-${tipo}`} onClick={props.aoClicar}>
            {props.texto}
        </button>
    )
}
