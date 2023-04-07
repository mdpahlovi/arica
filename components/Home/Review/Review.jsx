import ReviewCard from "./ReviewCard";
import { testimonials } from "../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function Review() {
    // Slider Options
    const params = {
        spaceBetween: 24,
        slidesPerView: 1,
        style: { "--swiper-navigation-size": "20px", "--swiper-navigation-color": "#000", "--swiper-navigation-sides-offset": "24px" },
        navigation: true,
        modules: [Autoplay, Navigation],
        autoplay: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    };

    return (
        <section className="container py-16">
            <div className="max-w-xl text-center mx-auto space-y-2.5 -mt-2">
                <h2>Hear from our customers</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna lorem,
                    euismod volutpat arcu volutpat et.
                </p>
            </div>
            <Swiper {...params} className="mt-8">
                {testimonials.map((testimonial, idx) => (
                    <SwiperSlide key={idx}>
                        <ReviewCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
