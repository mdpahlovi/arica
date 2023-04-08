import Image from "next/image";
import { stats } from "./Data";

export default function About() {
    return (
        <div className="container pt-16 grid gap-12 items-center lg:grid-cols-2">
            <div className="hidden lg:block">
                <Image src="/images/about.webp" alt="" className="rounded-lg" width={512} height={512} />
            </div>
            <div className="flex flex-col justify-center gap-5">
                <div className="space-y-2.5 -mt-2">
                    <h2>For One-Stop Solution Since 2008</h2>
                    <p>
                        Arica is a full-service digital marketing company that focuses on driving results via effective and measurable solutions. We partner
                        with our clients to develop their marketing plans, and set up winning strategies to generate and convert leads. From designing,
                        developing and optimizing websites to increasing sales through tactical digital marketing activities, we work with our clients to raise
                        their brand awareness, generate more sales opportunities and maximize their marketing budget ROI.
                    </p>
                </div>
                <div className="card divide-y grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                    {stats.map((item, idx) => (
                        <div key={idx} className="text-center py-6">
                            <h2 className="text-primary">{item.data}</h2>
                            <p className="mt-3">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
