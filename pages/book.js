import Header from "@/components/Common/Header";
import Link from "next/link";
import React from "react";

export default function book() {
    return (
        <>
            <Header title="Our Recent Works">
                <Link href="/book">Book</Link>
            </Header>
            <section className="container py-16"></section>
        </>
    );
}
