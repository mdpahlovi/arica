import Image from "next/image";
import { SiMaildotru } from "react-icons/si";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function TeamCard({ member }) {
    const { name, title, mail, facebook, linkedin, avatar } = member;

    return (
        <div className="group relative space-y-4 text-center">
            <div className="relative z-10 mt-6 mx-auto h-52 w-52 rotate-45 overflow-hidden rounded-[4rem] -mb-[7.5rem]">
                <Image
                    className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-150"
                    src={avatar}
                    alt="woman"
                    width={100}
                    height={100}
                />
            </div>
            <div className="absolute w-full bottom-16">
                <h5 className="text-center">{name}</h5>
            </div>
            <div className="pt-32 pb-6 card transition duration-300 scale-y-0 group-hover:scale-y-100 origin-top">
                <h5>{name}</h5>
                <div className="text-gray-500">
                    <p>{title}</p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <a href={mail}>
                            <SiMaildotru size={20} />
                        </a>
                        <a href={linkedin}>
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href={facebook}>
                            <FaFacebookF size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
