import Link from "next/link";
import { Tab } from "@headlessui/react";
import Header from "@/components/Common/Header";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { classNames } from "@/utilities/classNames";
import ProductCard from "@/components/Products/ProductCard";

const categories = [
    {
        tab: "All Works",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    },
    {
        tab: "Poster Design",
        data: [5, 6, 10, 11],
    },
    {
        tab: "Web Design",
        data: [2, 3, 4],
    },
    {
        tab: "3D Visualization",
        data: [1, 7, 8, 9],
    },
];

export default function Example() {
    return (
        <>
            <Header title="Our Recent Works">
                <Link href="/contact">Products</Link>
            </Header>
            <div className="container py-16">
                <Tab.Group>
                    <Tab.List className="flex justify-center overflow-x-auto">
                        {categories.map(({ tab }) => (
                            <Tab
                                key={tab}
                                className={({ selected }) =>
                                    classNames(
                                        "px-6 pb-4 focus:outline-none whitespace-nowrap",
                                        selected
                                            ? "relative content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1.5 after:rounded-t-full after:bg-slate-500"
                                            : "border-b"
                                    )
                                }
                            >
                                {tab}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-8">
                        {categories.map(({ data }, idx) => (
                            <Tab.Panel key={idx} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <PhotoProvider>
                                    {data.map((item, idx) => (
                                        <ProductCard key={idx} item={item} />
                                    ))}
                                </PhotoProvider>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    );
}
