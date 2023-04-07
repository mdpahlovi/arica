import React from "react";
import { stats } from "./Data";

export default function Stats() {
    return (
        <section className="container py-16">
            <div className="max-w-xl text-center mx-auto space-y-2.5 -mt-2">
                <h2>Our customers are always happy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.</p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                {stats.map((item, idx) => (
                    <div key={idx} className="text-center px-12 md:px-16">
                        <h2 className="text-primary">{item.data}</h2>
                        <p className="mt-3">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
