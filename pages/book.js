import Header from "@/components/Common/Header";
import Link from "next/link";
import React from "react";

const services = [
    "Consultation On Digital Marketing",
    "Seo And Website Management",
    "Creative Graphic Solutions",
    "Online Advertising Management",
    "Social Media Management",
    "Web Design & Development",
];

export default function book() {
    return (
        <>
            <Header title="Let's Partner up">
                <Link href="/book">Booking</Link>
            </Header>
            <section className="container py-16">
                <form className="max-w-2xl mx-auto flex flex-col gap-4">
                    <input type="text" name="name" placeholder="Company Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <select name="service">
                        <option value="">Select a service</option>
                        {services.map((service, idx) => (
                            <option key={idx} value={service}>
                                {service}
                            </option>
                        ))}
                    </select>
                    <div className="grid xs:grid-cols-2 gap-4">
                        <input type="date" name="start" placeholder="Starting Date" />
                        <input type="date" name="end" placeholder="Ending Date" />
                    </div>
                    <button type="submit" className="button primary justify-center">
                        Submit Now
                    </button>
                </form>
            </section>
        </>
    );
}
