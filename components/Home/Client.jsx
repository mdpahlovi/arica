import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function CLient() {
    return (
        <div className="py-16 bg-accent text-white">
            <div className="max-w-xl text-center mx-auto space-y-2.5 -mt-2">
                <h2>Who&apos;s using Float UI?</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim nibh nisl, vel egestas magna rhoncus at. Nunc elementum efficitur
                    tortor in laoreet.
                </p>
            </div>
            <Marquee className="mt-8" gradient={false}>
                {[...Array(11)].map((a, idx) => (
                    <Image key={idx} src={`/client/image (${idx}).png`} alt="" width={200} height={94} />
                ))}
            </Marquee>
        </div>
    );
}
