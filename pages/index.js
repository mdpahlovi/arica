import CLient from "@/components/Home/Client";
import Hero from "@/components/Home/Hero";
import NewsLetter from "@/components/Home/NewsLetter";
import Review from "@/components/Home/Review";
import Service from "@/components/Home/Service";

export default function Home() {
    return (
        <>
            <Hero />
            <Service />
            <CLient />
            <Review />
            <NewsLetter />
        </>
    );
}
