import SecHeader from "@/components/Common/SecHeader";
import { services } from "../Data";

export default function Service() {
    return (
        <section className="container pb-16">
            <SecHeader title="Our Services">What do we provide?</SecHeader>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map(({ title, descriptions, icons }, idx) => (
                    <div key={idx} className="card p-6 hover:-translate-y-2 hover:scale-105 transition duration-300">
                        <div className="text-primary pb-2.5">{icons}</div>
                        <h5>{title}</h5>
                        <p>{descriptions}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
