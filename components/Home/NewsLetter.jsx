import Link from "next/link";
import SecHeader from "../Common/SecHeader";

export default function NewsLetter() {
    return (
        <div className="py-16 bg-primary text-white">
            <SecHeader title="Subscribe Us" accent>
                Get&apos;s our recent update
            </SecHeader>
            <form onSubmit={(e) => e.preventDefault()} className="relative w-max mx-auto">
                <input type="email" placeholder="Enter your email" className="pr-20 xs:pr-28 text-black" />
                <button type="submit" className="button primary absolute top-[2.6px] right-[3px]">
                    Subscribe
                </button>
            </form>
            <p className="mt-3 max-w-lg text-center mx-auto">
                No spam ever, we are care about the protection of your data. Read our{" "}
                <Link className="underline" href="/">
                    Privacy Policy
                </Link>
            </p>
        </div>
    );
}
