import { Car, Heart } from "lucide-react";
import { Veiculo } from "../dados/veiculos";
import { Botao } from "./botao.componente";

type CartaoVeiculoProps = {
    veiculo: Veiculo,
    favorito: boolean,
    aoFavoritar: () => void,
    aoDetalhes: () => void
}

export function CartaoVeiculo(props: CartaoVeiculoProps){

    const veiculo = props.veiculo

    return (
        <div className="cartao">
            {/* Troque este bloco por uma foto quando tiver as imagens */}
            <div className="h-40 bg-neutral-200 flex items-center justify-center relative">
                <Car size={48}/>
                <button className="absolute top-2 right-2 bg-white p-2 cursor-pointer" onClick={props.aoFavoritar}>
                    <Heart size={16} fill={props.favorito ? "black" : "none"}/>
                </button>
            </div>
            <div className="p-4 flex flex-col gap-3">
                <div>
                    <h3 className="font-bold">{veiculo.nome}</h3>
                    <p className="text-sm text-gray-500">{veiculo.ano} · {veiculo.categoria}</p>
                </div>
                <p className="text-sm text-gray-500">
                    {veiculo.km} km · {veiculo.cambio} · {veiculo.combustivel}
                </p>
                <div className="flex justify-between items-center">
                    <span className="font-bold">R$ {veiculo.preco.toLocaleString("pt-BR")}</span>
                    <Botao texto="Ver detalhes" aoClicar={props.aoDetalhes}/>
                </div>
            </div>
        </div>
    )
}
