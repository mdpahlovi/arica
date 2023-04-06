import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ item }) {
    const { title, path } = item;
    const { pathname } = useRouter();

    return (
        <li
            className={`transition-all duration-300 ${
                pathname === path ? "tracking-wider font-semibold" : "hover:tracking-wider after:scale-x-0 hover:after:scale-x-105"
            }`}
        >
            <Link href={path}>{title}</Link>
        </li>
    );
}
