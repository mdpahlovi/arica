import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Header({ title, children }) {
    return (
        <div className="bg-cover py-16 relative" style={{ backgroundImage: 'url("/images/header.jpg")' }}>
            <div className="relative z-10 container text-white space-y-2.5 -mt-2">
                <h2>{title}</h2>
                <div className="flex items-end gap-2">
                    <Link href="/">Home</Link>
                    <RiArrowRightSLine size={20} />
                    {children}
                </div>
            </div>
            <div className="absolute inset-0 w-full h-full bg-black/40"></div>
        </div>
    );
}
