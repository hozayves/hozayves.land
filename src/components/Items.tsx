import Image from "next/image"
import Link from "next/link"

interface ItemsProps {
    icon: string,
    company: string,
    role: string,
    from: string,
    to: string
}
export function Work({ icon, company, role, from, to }: ItemsProps) {
    return (
        <div className="flex gap-2 items-center">
            <div className="border border-gray-200/3 flex items-center justify-center rounded-full shadow-md ">
                <Image src={icon} alt="" width={40} height={40} className="rounded-full" />
            </div>
            <div className="flex flex-col w-full">
                <h3 className="text-lg font-semibold capitalize">{company}</h3>
                <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-400 leading-none">{role}</p>
                    <div className="flex justify-between gap-2 items-center text-xs ">
                        <span>{from}</span>
                        <span>-</span>
                        <span>{to}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Stack({ icon, title, subTitle }: { icon: any, title: string, subTitle: string }) {
    return (
        <div className="flex gap-2 items-center">
            <div className="border border-gray-200/3 w-14 h-14 flex items-center justify-center rounded-md shadow-md">
                {icon}
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold capitalize">{title}</h3>
                <p className="text-xs text-gray-400 leading-none">{subTitle}</p>
            </div>
        </div>
    )
}