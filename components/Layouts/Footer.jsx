import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
    const footer_nabs = [
        {
            label: "Company",
            items: [
                {
                    href: "/",
                    name: "Partners",
                },
                {
                    href: "/",
                    name: "Blog",
                },
                {
                    href: "/",
                    name: "Team",
                },
                {
                    href: "/",
                    name: "Careers",
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: "/",
                    name: "contact",
                },
                {
                    href: "/",
                    name: "Support",
                },
                {
                    href: "/",
                    name: "Docs",
                },
                {
                    href: "/",
                    name: "Pricing",
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: "/",
                    name: "Terms",
                },
                {
                    href: "/",
                    name: "License",
                },
                {
                    href: "/",
                    name: "Privacy",
                },
                {
                    href: "/",
                    name: "About US",
                },
            ],
        },
    ];

    return (
        <footer className="border-t">
            <div className="container pt-12 gap-6 justify-between md:flex space-y-6 md:space-y-0">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <Link href="/">
                            <Image src="/logo.png" width={120} height={50} alt="Logo" />
                        </Link>
                        <p className="leading-relaxed mt-2">Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
                <div className="flex-1 flex flex-col xs:flex-row xs:justify-between gap-6">
                    {footer_nabs.map(({ label, items }, idx) => (
                        <ul className="space-y-2.5" key={idx}>
                            <h4 className="text-lg font-semibold">{label}</h4>
                            <div className="flex flex-col gap-0.5">
                                {items.map(({ href, name }, idx) => (
                                    <Link key={idx} href={href} className="hover:underline hover:text-indigo-600">
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        </ul>
                    ))}
                </div>
            </div>
            <div className="container mt-8 py-6 border-t items-center justify-between sm:flex">
                <div>&copy; 2022 Float UI All rights reserved.</div>
                <div className="mt-6 sm:mt-0 flex items-center space-x-4">
                    <Link href="/" className="social-icon">
                        <FaFacebook size={20} />
                    </Link>
                    <Link href="/" className="social-icon">
                        <FaLinkedinIn size={20} />
                    </Link>
                    <Link href="/" className="social-icon">
                        <FaInstagram size={20} />
                    </Link>
                    <Link href="/" className="social-icon">
                        <FaYoutube size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
