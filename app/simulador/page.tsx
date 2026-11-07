"use client"

import { useState } from "react";
import Pagina from "../componentes/pagina.componente";
import { Filtro } from "../componentes/filtro.componente";
import { veiculos } from "../dados/veiculos";

const entradas = [0, 10, 20, 30]
const prazos = [12, 24, 36, 48, 60, 72]
const taxas = [0.99, 1.19, 1.29, 1.49, 1.79, 1.99]

function moeda(valor: number){
    return "R$ " + Math.round(valor).toLocaleString("pt-BR")
}

export default function SimuladorPage(){

    const [indice, setIndice] = useState(0)
    const [entradaPercentual, setEntradaPercentual] = useState(0)
    const [prazo, setPrazo] = useState(48)
    const [taxa, setTaxa] = useState(1.49)

    const veiculo = veiculos[indice]

    // Cálculo do financiamento (Tabela Price)
    const entrada = veiculo.preco * entradaPercentual / 100
    const financiado = veiculo.preco - entrada
    const juros = taxa / 100
    const parcela = (financiado * juros) / (1 - Math.pow(1 + juros, -prazo))
    const total = parcela * prazo

    return (
        <Pagina titulo="Simulação de Financiamento" subtitulo="Escolha o veículo, a entrada, o prazo e a taxa">
            <div className="flex gap-8 flex-wrap">

                <div className="flex flex-col gap-6 flex-1">
                    <div className="flex flex-col gap-2">
                        <span className="campo-rotulo">Veículo</span>
                        <div className="flex gap-2 flex-wrap">
                            {
                                veiculos.map((item, i) => (
                                    <Filtro key={item.id} texto={item.nome} ativo={indice === i} aoClicar={() => setIndice(i)}/>
                                ))
                            }
                        </div>
                        <p className="text-sm">Valor do veículo: <strong>{moeda(veiculo.preco)}</strong></p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="campo-rotulo">Entrada</span>
                        <div className="flex gap-2">
                            {
                                entradas.map((item: number) => (
                                    <Filtro key={item} texto={item + "%"} ativo={entradaPercentual === item} aoClicar={() => setEntradaPercentual(item)}/>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="campo-rotulo">Prazo</span>
                        <div className="flex gap-2 flex-wrap">
                            {
                                prazos.map((item: number) => (
                                    <Filtro key={item} texto={item + "x"} ativo={prazo === item} aoClicar={() => setPrazo(item)}/>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="campo-rotulo">Taxa mensal</span>
                        <div className="flex gap-2 flex-wrap">
                            {
                                taxas.map((item: number) => (
                                    <Filtro key={item} texto={item + "%"} ativo={taxa === item} aoClicar={() => setTaxa(item)}/>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="cartao p-6 gap-4 flex-1 items-center text-center">
                    <span className="campo-rotulo">Parcela estimada</span>
                    <strong className="text-5xl">{moeda(parcela)}</strong>
                    <span className="text-sm text-gray-500">por mês · {prazo}x</span>
                    <div className="w-full flex flex-col gap-2 text-sm">
                        <p className="flex justify-between border p-3"><span>Valor financiado</span><strong>{moeda(financiado)}</strong></p>
                        <p className="flex justify-between border p-3"><span>Entrada</span><strong>{moeda(entrada)}</strong></p>
                        <p className="flex justify-between border p-3"><span>Taxa de juros</span><strong>{taxa}% a.m.</strong></p>
                        <p className="flex justify-between border p-3"><span>Total de juros</span><strong>{moeda(total - financiado)}</strong></p>
                        <p className="flex justify-between p-3 bg-neutral-900 text-white"><span>Total a pagar</span><strong>{moeda(total + entrada)}</strong></p>
                    </div>
                </div>

            </div>
        </Pagina>
    )
}
