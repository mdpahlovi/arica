import Head from "next/head";
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";

export default function Main({ children }) {
    return (
        <>
            <Head>
                <title>arica</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}