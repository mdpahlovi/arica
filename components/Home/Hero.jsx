import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function Hero() {
    return (
        <section className="container py-16 grid lg:grid-cols-2 items-center gap-12">
            <div className="space-y-4">
                <p className="text-primary">Welcome to Arica</p>
                <h1>We help startups to grow and make money</h1>
                <p className="pt-2">
                    Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                </p>
                <div className="grid xs:grid-cols-2 xs:w-max items-center gap-4">
                    <Link href="/book" className="button primary">
                        Let&apos;s get started
                    </Link>
                    <Link href="/" className="button border">
                        Get access
                        <HiOutlineArrowLongRight />
                    </Link>
                </div>
            </div>
            <Image src="/images/hero.avif" className="lg:ml-auto lg:rounded-tl-[108px]" alt="" width={512} height={512} />
        </section>
    );
}
