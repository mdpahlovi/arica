import ReviewCard from "./ReviewCard";
import { testimonials } from "../Data";

export default function Review() {
    return (
        <section className="relative py-16">
            <div className="container relative z-10">
                <div className="max-w-xl text-center mx-auto space-y-2.5 -mt-2">
                    <h2>Hear from our customers</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna
                        lorem, euismod volutpat arcu volutpat et.
                    </p>
                </div>
                <div className="mt-8 grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <ReviewCard key={idx} testimonial={testimonial} />
                    ))}
                </div>
            </div>
            <div className="absolute top-0 w-full h-96 sm:h-80 bg-primary bg-gradient-to-b from-primary via-secondary to-accent opacity-50"></div>
        </section>
    );
}
