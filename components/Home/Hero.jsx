import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Laravel, { CloudFlare, DigitalOcean, Vercel } from "./Icons";

export default function Hero() {
    return (
        <section className="container py-16">
            <div className="grid lg:grid-cols-2 items-center gap-12">
                <div className="space-y-4">
                    <p className="text-primary">Over 200 successful deals</p>
                    <h1>We help startups to grow and make money</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
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
            </div>
            <div className="mt-14 px-4 md:px-8">
                <p className="text-center font-semibold">Trusted by the best companies</p>
                <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                    <DigitalOcean />
                    <Vercel />
                    <CloudFlare />
                    <Laravel />
                </div>
            </div>
        </section>
    );
}
