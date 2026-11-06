import { LucideIcon } from "lucide-react";
import Link from "next/link";

type ItemMenuProps = {
    texto: string,
    link: string,
    icone: LucideIcon
}

export function ItemMenu(props: ItemMenuProps){

    const Icone = props.icone

    return (
        <Link href={props.link}>
            <li className="item-menu">
                <Icone size={20}/>
                <span>{props.texto}</span>
            </li>
        </Link>
    )
}
