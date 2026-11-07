"use client"

import { useState } from "react";
import { LockKeyhole, MapPin, SlidersHorizontal, User } from "lucide-react";
import Pagina from "../componentes/pagina.componente";
import { Botao } from "../componentes/botao.componente";
import { CampoTexto } from "../componentes/campo-texto.componente";
import { CampoSelecao } from "../componentes/campo-selecao.componente";

const abas = [
    {nome: "Dados pessoais", icone: User},
    {nome: "Endereço", icone: MapPin},
    {nome: "Segurança", icone: LockKeyhole},
    {nome: "Preferências", icone: SlidersHorizontal},
]

export default function PerfilPage(){

    const [aba, setAba] = useState("Dados pessoais")
    const [salvo, setSalvo] = useState(false)

    return (
        <Pagina titulo="Meu perfil" subtitulo="Atualize suas informações">
            <div className="flex gap-8 flex-wrap">

                <nav className="flex flex-col w-56">
                    {
                        abas.map((item) => {
                            const Icone = item.icone
                            const activeStyle = aba === item.nome ? "bg-neutral-100 font-bold" : ""

                            return (
                                <button
                                    key={item.nome}
                                    className={`item-menu cursor-pointer ${activeStyle}`}
                                    onClick={() => setAba(item.nome)}
                                >
                                    <Icone size={18}/> {item.nome}
                                </button>
                            )
                        })
                    }
                </nav>

                <div className="flex flex-col gap-6 flex-1 max-w-2xl">
                    {
                        aba === "Dados pessoais" ? (
                            <>
                                <div className="flex gap-6">
                                    <CampoTexto rotulo="Nome completo" valorInicial="João da Silva"/>
                                    <CampoTexto rotulo="E-mail" tipo="email" valorInicial="joao.silva@email.com"/>
                                </div>
                                <div className="flex gap-6">
                                    <CampoTexto rotulo="Telefone" valorInicial="(11) 9 8765-4321"/>
                                    <CampoTexto rotulo="CPF" valorInicial="123.456.789-00"/>
                                </div>
                                <div className="flex gap-6">
                                    <CampoTexto rotulo="Nascimento" tipo="date" valorInicial="1990-06-15"/>
                                    <CampoSelecao rotulo="Gênero" opcoes={["Masculino", "Feminino", "Outro"]}/>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Botao texto="Salvar alterações" aoClicar={() => setSalvo(true)}/>
                                    <span className="text-sm text-green-600">{salvo ? "Alterações salvas!" : ""}</span>
                                </div>
                            </>
                        ) : (
                            <p className="text-gray-500">Seção "{aba}" em construção.</p>
                        )
                    }
                </div>

            </div>
        </Pagina>
    )
}
