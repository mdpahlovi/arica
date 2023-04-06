import { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import { CgClose, CgMenuRight } from "react-icons/cg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "Products", path: "/products" },
        { title: "Contact Us", path: "/contact" },
    ];

    return (
        <nav className="py-4 border-b">
            <div className="container relative items-center justify-between md:flex md:space-x-6">
                <div className="flex justify-between">
                    <Link href="/">
                        <Image src="/logo.png" width={120} height={50} alt="Logo" />
                    </Link>
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <CgClose size={24} /> : <CgMenuRight size={24} />}
                    </button>
                </div>
                <div
                    className={`absolute inset-x-0 mt-8 px-6 py-4 rounded-2xl md:mt-0 md:p-0 md:static ${
                        isOpen ? "bg-background z-10 scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    }  border transition duration-300 origin-top md:border-none md:scale-y-100 md:opacity-100`}
                >
                    <ul className="items-center space-y-2.5 md:flex md:space-x-6 md:space-y-0">
                        {navigation.map((item, idx) => (
                            <NavLink key={idx} item={item} />
                        ))}
                        <Link href="/book" className="button primary">
                            Book Now
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
