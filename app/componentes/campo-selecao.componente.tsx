"use client"

import { useState } from "react"

type CampoSelecaoProps = {
    rotulo: string,
    opcoes: string[],
    valorInicial?: string,
    aoMudar?: (valor: string) => void
}

export function CampoSelecao(props: CampoSelecaoProps){

    const [valor, setValor] = useState(props.valorInicial ?? props.opcoes[0])

    function mudarValor(novoValor: string){
        setValor(novoValor)

        if(props.aoMudar){
            props.aoMudar(novoValor)
        }
    }

    return (
        <label className="campo">
            <span className="campo-rotulo">{props.rotulo}</span>
            <select
                className="campo-texto"
                value={valor}
                onChange={(event) => mudarValor(event.target.value)}
            >
                {
                    props.opcoes.map((opcao: string) => (
                        <option key={opcao} value={opcao}>{opcao}</option>
                    ))
                }
            </select>
        </label>
    )
}
