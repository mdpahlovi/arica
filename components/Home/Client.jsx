import Image from "next/image";
import Marquee from "react-fast-marquee";
import SecHeader from "../Common/SecHeader";

export default function Client() {
    return (
        <div className="py-16 bg-accent text-white">
            <SecHeader title="Our Clients">Who&apos;s using Arica?</SecHeader>
            <Marquee gradient={false}>
                {[...Array(11)].map((a, idx) => (
                    <Image key={idx} src={`/client/image (${idx}).png`} alt="" width={200} height={94} />
                ))}
            </Marquee>
        </div>
    );
}
