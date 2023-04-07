import { Tab } from "@headlessui/react";
import Header from "@/components/Common/Header";
import Link from "next/link";
import Image from "next/image";
import { SlSizeFullscreen } from "react-icons/sl";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

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
                    <Tab.List className="flex justify-center gap-4 border-b overflow-scroll">
                        {categories.map(({ tab }) => (
                            <Tab
                                key={tab}
                                className={({ selected }) =>
                                    classNames(
                                        "px-4 pb-4 focus:outline-none whitespace-nowrap",
                                        selected
                                            ? "relative content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1.5 after:rounded-t-full after:bg-slate-500"
                                            : ""
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
                                        <PhotoView key={idx} src={`/product/image (${item}).jpg`}>
                                            <div className="relative group aspect-[4_/_3] card overflow-hidden flex justify-center items-center">
                                                <SlSizeFullscreen
                                                    size={36}
                                                    className="absolute z-10 text-white opacity-0 group-hover:opacity-75 transition duration-300"
                                                />
                                                <Image
                                                    src={`/product/image (${item}).jpg`}
                                                    alt=""
                                                    className="absolute w-full h-full object-cover object-center group-hover:scale-125 transition duration-300"
                                                    width={512}
                                                    height={512}
                                                />
                                                <div className="absolute w-full h-full top-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                                            </div>
                                        </PhotoView>
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
