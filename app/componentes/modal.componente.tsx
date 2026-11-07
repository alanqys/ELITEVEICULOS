import { X } from "lucide-react"

type ModalProps = {
    aberto: boolean,
    titulo: string,
    aoFechar: () => void,
    children: React.ReactNode
}

export function Modal(props: ModalProps){

    // modal fechado não mostra nada
    if(!props.aberto){
        return null
    }

    return (
        <div className="fundo-modal">
            <div className="modal">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">{props.titulo}</h2>
                    <button className="cursor-pointer" onClick={props.aoFechar}>
                        <X/>
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    )
}
