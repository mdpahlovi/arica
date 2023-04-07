import React from "react";
import { stats } from "./Data";

export default function Stats() {
    return (
        <section className="container py-16">
            <div className="max-w-xl text-center mx-auto space-y-2.5 -mt-2">
                <h2>Our customers are always happy</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.</p>
            </div>
            <div className="mt-8 divide-y flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:divide-x sm:divide-y-0">
                {stats.map((item, idx) => (
                    <div key={idx} className="text-center py-6 px-6 md:px-10 lg:px-16">
                        <h2 className="text-primary">{item.data}</h2>
                        <p className="mt-3">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
