import classNames from "classnames";
import Link from "next/link";

export default function Menu(props: Partial<MenuProps>) {
    const {title, active, href = "/" }= props;
    const classTitle = classNames({
        'nav-link': true,
        'active': active
    })

    return (
        <li className="nav-item my-auto">
            <Link href={href}>
                <a className={classTitle} aria-current="page">{title}</a>
            </Link>
        </li>
    )
}

interface MenuProps {
    title: string;
    active?: boolean
    href: string
}
