import Image from "next/image";
import { PhotoView } from "react-photo-view";
import { SlSizeFullscreen } from "react-icons/sl";

export default function ProductCard({ item }) {
    return (
        <PhotoView src={`/product/image (${item}).jpg`}>
            <div className="relative group aspect-[4_/_3] card overflow-hidden flex justify-center items-center">
                <SlSizeFullscreen size={36} className="absolute z-10 text-white opacity-0 group-hover:opacity-75 transition duration-300" />
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
    );
}
