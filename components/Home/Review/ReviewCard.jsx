import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

export default function ReviewCard({ testimonial }) {
    const { avatar, quote, name, title } = testimonial;

    return (
        <li className="card">
            <div className="px-6 pt-4">
                <ImQuotesLeft size={36} className="text-edge mb-1" />
                <h5>{quote}</h5>
            </div>
            <div className="flex gap-4 px-6 py-4 mt-4 bg-accent/25">
                <Image src={avatar} alt="" className="w-12 h-12 rounded-full border-2 border-primary" width={32} height={32} />
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-primary text-sm">{title}</p>
                </div>
            </div>
        </li>
    );
}
