import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SecHeader from "@/components/Common/SecHeader";
import { testimonials } from "@/data/data";

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
            <SecHeader title="Our Testimonials">Hear from our customers</SecHeader>
            <Swiper {...params}>
                {testimonials.map((testimonial, idx) => (
                    <SwiperSlide key={idx}>
                        <ReviewCard testimonial={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
