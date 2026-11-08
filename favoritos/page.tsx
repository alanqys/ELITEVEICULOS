"use client"

import { useState } from "react";
import Pagina from "../componentes/pagina.componente";
import { Modal } from "../componentes/modal.componente";
import { CartaoVeiculo } from "../componentes/cartao-veiculo.componente";
import { Veiculo, veiculos } from "../dados/veiculos";

export default function FavoritosPage(){

    // Começa com 3 veículos favoritos de exemplo
    const [favoritos, setFavoritos] = useState<Veiculo[]>(veiculos.slice(0, 3))
    const [selecionado, setSelecionado] = useState<Veiculo | null>(null)

    function removerFavorito(id: number){
        setFavoritos(favoritos.filter((item: Veiculo) => item.id !== id))
    }

    return (
        <Pagina titulo="Favoritos" subtitulo={favoritos.length + " veículos salvos"}>

            {
                favoritos.length === 0 ? (
                    <p className="text-gray-500">Você ainda não tem veículos favoritos.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {
                            favoritos.map((item: Veiculo) => (
                                <CartaoVeiculo
                                    key={item.id}
                                    veiculo={item}
                                    favorito={true}
                                    aoFavoritar={() => removerFavorito(item.id)}
                                    aoDetalhes={() => setSelecionado(item)}
                                />
                            ))
                        }
                    </div>
                )
            }

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
                </div>
                <strong className="text-2xl">R$ {selecionado?.preco.toLocaleString("pt-BR")}</strong>
            </Modal>

        </Pagina>
    )
}
