import Link from "next/link";

export default function NewsLetter() {
    return (
        <div className="py-16 bg-primary text-white">
            <div className="max-w-xl text-center mx-auto space-y-2.5 -mt-2">
                <h2>Let’s help power your SaaS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.</p>
            </div>
            <div className="mt-8">
                <form onSubmit={(e) => e.preventDefault()} className="relative w-max mx-auto">
                    <input type="email" placeholder="Enter your email" className="pr-28 text-black" />
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
        </div>
    );
}
