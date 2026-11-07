"use client"

import { useState } from "react";
import Link from "next/link";
import Pagina from "../componentes/pagina.componente";
import { Filtro } from "../componentes/filtro.componente";
import { CampoTexto } from "../componentes/campo-texto.componente";
import { CampoSelecao } from "../componentes/campo-selecao.componente";
import { Modal } from "../componentes/modal.componente";
import { CartaoVeiculo } from "../componentes/cartao-veiculo.componente";
import { Veiculo, veiculos } from "../dados/veiculos";

const categorias = ["Todos", "Sedan", "Hatch", "SUV", "Pickup", "Esportivo"]
const combustiveis = ["Flex", "Gasolina", "Elétrico", "Híbrido"]

export default function CatalogoPage(){

    const [categoria, setCategoria] = useState("Todos")
    const [busca, setBusca] = useState("")
    const [precoMax, setPrecoMax] = useState(300000)
    const [combustivel, setCombustivel] = useState<string[]>([])
    const [ordem, setOrdem] = useState("Menor preço")
    const [favoritos, setFavoritos] = useState<number[]>([])
    const [selecionado, setSelecionado] = useState<Veiculo | null>(null)

    function alternarFavorito(id: number){
        if(favoritos.includes(id)){
            setFavoritos(favoritos.filter((item: number) => item !== id))
        }
        else{
            setFavoritos([...favoritos, id])
        }
    }

    function alternarCombustivel(nome: string){
        if(combustivel.includes(nome)){
            setCombustivel(combustivel.filter((item: string) => item !== nome))
        }
        else{
            setCombustivel([...combustivel, nome])
        }
    }

    // A lista é calculada a partir dos states: mudou um filtro, a lista é refeita
    const listaFiltrada = veiculos
        .filter((v: Veiculo) => categoria === "Todos" || v.categoria === categoria)
        .filter((v: Veiculo) => v.nome.toLowerCase().includes(busca.toLowerCase()))
        .filter((v: Veiculo) => v.preco <= precoMax)
        .filter((v: Veiculo) => combustivel.length === 0 || combustivel.includes(v.combustivel))

    listaFiltrada.sort((a, b) => ordem === "Menor preço" ? a.preco - b.preco : b.preco - a.preco)

    return (
        <Pagina titulo="Catálogo de Veículos" subtitulo={listaFiltrada.length + " veículos encontrados"}>

            <div className="flex gap-4 items-end">
                <CampoTexto rotulo="Buscar" dica="Buscar veículo..." aoMudar={setBusca}/>
                <CampoSelecao rotulo="Ordenar" opcoes={["Menor preço", "Maior preço"]} aoMudar={setOrdem}/>
            </div>

            <div className="flex gap-2 flex-wrap">
                {
                    categorias.map((item: string) => (
                        <Filtro key={item} texto={item} ativo={categoria === item} aoClicar={() => setCategoria(item)}/>
                    ))
                }
            </div>

            <div className="flex gap-6 items-center flex-wrap">
                <label className="flex items-center gap-3 text-sm">
                    <span className="campo-rotulo">Preço máximo</span>
                    <input
                        type="range"
                        min={50000}
                        max={300000}
                        step={10000}
                        value={precoMax}
                        onChange={(event) => setPrecoMax(parseInt(event.target.value))}
                    />
                    <strong>R$ {precoMax.toLocaleString("pt-BR")}</strong>
                </label>
                <div className="flex gap-2">
                    {
                        combustiveis.map((item: string) => (
                            <Filtro key={item} texto={item} ativo={combustivel.includes(item)} aoClicar={() => alternarCombustivel(item)}/>
                        ))
                    }
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    listaFiltrada.map((item: Veiculo) => (
                        <VeiculoCard
                            key={item.id}
                            veiculo={item}
                            favorito={favoritos.includes(item.id)}
                            aoFavoritar={() => alternarFavorito(item.id)}
                            aoDetalhes={() => setSelecionado(item)}
                        />
                    ))
                }
            </div>

            <Modal
                aberto={selecionado !== null}
                titulo={selecionado?.nome ?? ""}
                aoFechar={() => setSelecionado(null)}
            >
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <p><span className="campo-rotulo block">Quilometragem</span>{selecionado?.km} km</p>
                    <p><span className="campo-rotulo block">Câmbio</span>{selecionado?.cambio}</p>
                    <p><span className="campo-rotulo block">Combustível</span>{selecionado?.combustivel}</p>
                    <p><span className="campo-rotulo block">Cor</span>{selecionado?.cor}</p>
                    <p><span className="campo-rotulo block">Portas</span>{selecionado?.portas}</p>
                    <p><span className="campo-rotulo block">Ano</span>{selecionado?.ano}</p>
                </div>
                <p className="text-sm text-gray-600">{selecionado?.descricao}</p>
                <div className="flex justify-between items-center">
                    <strong className="text-2xl">R$ {selecionado?.preco.toLocaleString("pt-BR")}</strong>
                    <Link href="/simulador" className="botao botao-primario">Simular financiamento</Link>
                </div>
            </Modal>

        </Pagina>
    )
}
