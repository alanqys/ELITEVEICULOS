export function Titulo(props: any){
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{props.principal ?? "Título padrão"}</h1>
            <h2 className="text-sm text-gray-500">{props.subtitulo}</h2>
        </div>
    )
}
