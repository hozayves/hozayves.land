import Link from "next/link";
import { FaBasketballBall, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Connect({ className, childStyle }: { className?: string, childStyle?: string }) {
    return (
        <div className={`flex gap-4 items-center mt-6 ${className}`}>
            <button className="flex gap-1 items-center px-4 py-2 bg-black text-white font-medium text-sm/[1.45] rounded-full">
                <IoLogoWhatsapp className="text-white" size={20} />
                <span>Chat</span>
            </button>
            <div className="flex gap-2">
                <Link href="#"
                    className={`${childStyle} p-2 bg-[#F2F2F2]/[0.3] rounded-full flex items-center justify-center hover:bg-[#f8409c] hover:text-white transition-all duration-300 ease-in`}
                ><FaBasketballBall size={18} /></Link>
                <Link href="#"
                    className={`${childStyle} p-2 bg-[#F2F2F2]/[0.3] rounded-full flex items-center justify-center hover:bg-[#000] hover:text-white transition-colors duration-300 ease-in`}
                ><FaTwitter size={18} /></Link>
                <Link href="#"
                    className={`${childStyle} p-2 bg-[#F2F2F2]/[0.3] rounded-full flex items-center justify-center hover:bg-[#040301] hover:text-white transition-colors duration-300 ease-in`}
                ><FaGithub size={18} /></Link>
                <Link href="#"
                    className={`${childStyle} p-2 bg-[#F2F2F2]/[0.3] rounded-full flex items-center justify-center hover:bg-[#3a7ff5] hover:text-white transition-colors duration-300 ease-in`}
                ><FaLinkedin size={18} /></Link>
            </div>
        </div>
    )
}