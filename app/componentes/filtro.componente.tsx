type FiltroProps = {
    texto: string,
    ativo: boolean,
    aoClicar: () => void
}

export function Filtro(props: FiltroProps){

    const estiloAtivo = props.ativo ? "filtro-ativo" : ""

    return (
        <button className={`filtro ${estiloAtivo}`} onClick={props.aoClicar}>
            {props.texto}
        </button>
    )
}
