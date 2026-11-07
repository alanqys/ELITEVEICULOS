import { ItemMenu } from "./item-menu.componente";

type MenuProps = {
    itens: any[]
}

export function Menu(props: MenuProps){
    return (
        <ul>
            {
                props.itens.map((item: any) => (
                    <ItemMenu
                        key={item.link}
                        texto={item.texto}
                        link={item.link}
                        icone={item.icone}
                    />
                ))
            }
        </ul>
    )
}
