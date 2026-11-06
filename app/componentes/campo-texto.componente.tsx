"use client"

import { useState } from "react"

type CampoTextoProps = {
    rotulo: string,
    tipo?: string,
    dica?: string,
    valorInicial?: string,
    aoMudar?: (valor: string) => void
}

export function CampoTexto(props: CampoTextoProps){

    const [texto, setTexto] = useState(props.valorInicial ?? "")

    function mudarTexto(valor: string){
        setTexto(valor)

        if(props.aoMudar){
            props.aoMudar(valor)
        }
    }

    return (
        <label className="campo">
            <span className="campo-rotulo">{props.rotulo}</span>
            <input
                className="campo-texto"
                type={props.tipo ?? "text"}
                placeholder={props.dica}
                value={texto}
                onChange={(event) => mudarTexto(event.target.value)}
            />
        </label>
    )
}
