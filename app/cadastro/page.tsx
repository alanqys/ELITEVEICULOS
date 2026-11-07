"use client"

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LayoutAcesso from "../componentes/layout-acesso.componente";
import { Botao } from "../componentes/botao.componente";
import { CampoTexto } from "../componentes/campo-texto.componente";
import { CampoSelecao } from "../componentes/campo-selecao.componente";

export default function CadastroPage(){

    const [passo, setPasso] = useState(1)
    const [senha, setSenha] = useState("")
    const [confirmar, setConfirmar] = useState("")
    const [termos, setTermos] = useState(false)
    const [erro, setErro] = useState("")

    function continuar(){
        // validações do passo 1
        if(passo === 1){
            if(senha.length < 8){
                setErro("A senha precisa ter no mínimo 8 caracteres.")
                return
            }
            if(senha !== confirmar){
                setErro("As senhas não conferem.")
                return
            }
            if(!termos){
                setErro("Aceite os Termos de Uso para continuar.")
                return
            }
        }

        setErro("")
        setPasso(passo + 1)
    }

    function voltar(){
        setPasso(passo - 1)
    }

    const titulos = ["Criar conta", "Seus dados", "Preferências"]

    // Cabeçalho do painel branco muda conforme o passo
    const cabecalho = passo === 1 ? (
        <>
            <span>Portal do cliente</span>
            <Link href="/" className="acesso-link">Já tenho conta</Link>
        </>
    ) : (
        <>
            <span>Passo {passo} de 3</span>
            <button className="acesso-link flex items-center gap-1" onClick={voltar}>
                <ArrowLeft size={14}/> Voltar
            </button>
        </>
    )

    const indicador = (
        <p className="text-xs uppercase tracking-widest">
            Passo {passo} de 3 · {titulos[passo - 1]}
        </p>
    )

    // Os passos ficam escondidos (hidden) em vez de removidos,
    // assim os campos não perdem o que foi digitado
    return (
        <LayoutAcesso
            titulo={titulos[passo - 1]}
            subtitulo="Preencha seus dados para continuar"
            cabecalho={cabecalho}
            rodapeVisual={indicador}
        >
            <div className={passo === 1 ? "flex flex-col gap-6" : "hidden"}>
                <CampoTexto rotulo="Nome completo" dica="João da Silva"/>
                <CampoTexto rotulo="E-mail" tipo="email" dica="seu@email.com"/>
                <div className="flex gap-6">
                    <CampoTexto rotulo="Telefone" dica="(11) 9 0000-0000"/>
                    <CampoTexto rotulo="CPF" dica="000.000.000-00"/>
                </div>
                <CampoTexto rotulo="Senha" tipo="password" dica="Mínimo 8 caracteres" aoMudar={setSenha}/>
                <CampoTexto rotulo="Confirmar senha" tipo="password" dica="Repita a senha" aoMudar={setConfirmar}/>
                <label className="flex items-center gap-2 text-xs text-gray-500">
                    <input
                        type="checkbox"
                        checked={termos}
                        onChange={() => setTermos(!termos)}
                    />
                    Li e concordo com os Termos de Uso e a Política de Privacidade
                </label>
            </div>

            <div className={passo === 2 ? "flex flex-col gap-6" : "hidden"}>
                <div className="flex gap-6">
                    <CampoTexto rotulo="Nascimento" tipo="date"/>
                    <CampoSelecao rotulo="Gênero" opcoes={["Selecione", "Masculino", "Feminino", "Outro"]}/>
                </div>
                <div className="flex gap-6">
                    <CampoTexto rotulo="CEP" dica="00000-000"/>
                    <CampoTexto rotulo="Bairro"/>
                </div>
                <div className="flex gap-6">
                    <CampoTexto rotulo="Rua"/>
                    <CampoTexto rotulo="Nº"/>
                </div>
                <div className="flex gap-6">
                    <CampoTexto rotulo="Cidade"/>
                    <CampoTexto rotulo="UF"/>
                </div>
            </div>

            <div className={passo === 3 ? "flex flex-col gap-6" : "hidden"}>
                <CampoSelecao rotulo="Categoria preferida" opcoes={["Sedan", "Hatch", "SUV", "Pickup", "Esportivo"]}/>
                <CampoTexto rotulo="Orçamento máximo (R$)" tipo="number"/>
            </div>

            <p className="text-sm text-red-600">{erro}</p>

            {
                passo < 3
                    ? <Botao texto={passo === 1 ? "Cadastrar" : "Continuar"} aoClicar={continuar}/>
                    : <Link href="/catalogo" className="botao botao-primario">Finalizar</Link>
            }
        </LayoutAcesso>
    )
}
