import Main from "@/layouts/Main";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";

export default function App({ Component, pageProps }) {
    return (
        <Main>
            <Component {...pageProps} />
        </Main>
    );
}
