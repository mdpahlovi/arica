import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const ErrorPage = () => {
    return (
        <main className="container text-center flex flex-col items-center justify-center h-[512px] gap-4">
            <Link href="/">
                <Image src="/logo.png" width={120} height={50} alt="Logo" />
            </Link>
            <h1>Page not found</h1>
            <p className="md:mt-3">Sorry, the page you are looking for could not be found or has been removed.</p>
            <div className="grid xs:grid-cols-2 xs:w-max items-center gap-4">
                <Link href="/" className="button primary">
                    Back To Home
                </Link>
                <Link href="/contact" className="button border">
                    Contact Us
                    <HiOutlineArrowLongRight />
                </Link>
            </div>
        </main>
    );
};

export default ErrorPage;
