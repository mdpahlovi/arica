import { services } from "../Data";

export default function Service() {
    return (
        <section className="container py-16">
            <div className="max-w-xl text-center mx-auto space-y-2.5 -mt-2">
                <h2>What service do we provide?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.</p>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map(({ title, descriptions, icons }, idx) => (
                    <div key={idx} className="card p-6">
                        <div className="text-primary pb-2.5">{icons}</div>
                        <h5>{title}</h5>
                        <p>{descriptions}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
