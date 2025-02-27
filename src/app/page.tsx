'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaTwitter, FaGithub, FaBasketballBall, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [navs, setNavs] = useState(false)
  return (
    <div className="flex flex-col relative overflow-x-hidden overflow-y-hidden">
      <div className="absolute start-1/2 top-[-40%] blur-[180px] aspect-[2/1] w-[150rem] origin-bottom -translate-x-1/4  md:top-[-50%] md:-translate-x-1/2">
        <div className="h-1/2 w-full origin-top will-change-transform bg-cover bg-no-repeat bg-image  animate-wiggle animate-infinite animate-duration-[10000ms] animate-delay-0 animate-ease-in"></div>
      </div>
      <header className="lg:w-[80%] xl:w-[65%] md:mx-auto absolute inset-4 bottom-auto top-0 z-20 pt-8 md:py-6">
        {/* header */}
        <div className="flex gap-1 flex-row justify-between items-center">
          <div className="flex flex-col justify-start md:flex-row gap-1 lg:gap-3 items-center">
            <div className="flex items-center gap-3 rounded-full bg-white/[0.6] p-2">
              <Image
                className="rounded-full"
                src="/hozayves.jpg"
                width="30"
                height="30"
                alt="hozayves profile logo" />
              <span className="text-sm font-medium capitalize">muhoza yves</span>
              <div>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" className="size-5 text-[#1D9BF0]" aria-label="Trusted" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <div className="items-center gap-2 md:gap-1 lg:gap-3 text-xs hidden lg:flex">
              <span>muhozayves2014@gmail.com</span>
              <div className="flex gap-1 lg:gap-2">
                <button className="px-5 py-2 bg-white/[0.6] rounded-full border border-transparent hover:border-white/[0.6] hover:bg-transparent transition-all">Copy</button>
                <button className="px-5 py-2 bg-white/[0.6] rounded-full border border-transparent hover:border-white/[0.6] hover:bg-transparent transition-all">CV</button>
              </div>
            </div>
          </div>
          <ul className={`${navs ? 'block' : 'hidden'} absolute z-30 w-screen top-0 -left-[18px] bg-gray-800 text-white pt-10 h-screen md:relative md:flex md:p-0 md:h-auto md:bg-transparent md:justify-end md:items-center md:w-auto md:text-[#262626] text-sm font-medium`}>
            <li>
              <Link
                className="p-2 px-4 hover:bg-gray-700 text-center md:rounded-full md:hover:bg-white/[0.6] transition-colors"
                href="#">Home</Link>
            </li>
            <li>
              <Link className="p-2 px-4 hover:bg-gray-700 text-center rounded-full md:hover:bg-white/[0.6] transition-colors" href="#">Work</Link>
            </li>
            <li>
              <Link className="p-2 px-4 hover:bg-gray-700 text-center rounded-full md:hover:bg-white/[0.6] transition-colors" href="#">Contact</Link>
            </li>
          </ul>
          <div className="md:hidden flex z-30 ">
            <button className={`${!navs ? 'block md:hidden' : 'hidden'} flex justify-center items-center p-3 bg-white/[0.6] rounded-full w-[45px] h-[45px]`}>
              <svg
                onClick={() => setNavs(true)}
                stroke="currentColor"
                fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="size-6" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path>
              </svg>

            </button>
            <button className={`z-10 text-white pr-3  ${navs ? 'block' : 'hidden'}`}>
              <MdClose size={20} onClick={() => setNavs(false)} />
            </button>
          </div>
        </div>
      </header>
      <div className=" mx-auto max-w-[min(60.75rem,calc(100%-2.5rem))] lg:max-w-[min(55rem,calc(100%-2.5rem))] mb-[9.19rem] mt-[12.69rem] md:mb-[12.19rem] md:mt-[13.69rem] md:pt-0 z-20 flex relative md:flex-row md:gap-2">
        <div className="flex flex-col gap-5 md:w-[65%]">
          {/* <h1 >Designing Experiences that feel effortless</h1> */}
          <h2 className="text-3xl lg:text-4xl font-medium">Hallo, I’m Yves, a <span className="opacity-60">Web & Mobile  Design Expert</span> With  5 years of experience</h2>
          <p className="text-base/5 lg:text-lg/6 mt-2">I care a lot about web & mobile apps that are beautiful, delightful, user-friendly and human experiences - Currently based in
            <span className="line-through text-gray-400 ml-1">Kampala,</span>
            <span className="line-through text-gray-400 mx-1">Nairobi,</span>
            <span className="line-through text-gray-400 mr-1">London,</span>
            <span className="font-medium">Kigali, Rwanda</span>
          </p>
          <div className="flex gap-4 items-center mt-6">
            <button className="flex gap-1 items-center px-4 py-2 bg-black text-white font-medium text-sm/[1.45] rounded-full">
              <IoLogoWhatsapp className="text-white" size={20} />
              <span>Chat</span>
            </button>
            <div className="flex gap-2">
              <Link href="#"
                className={`p-2 bg-[#F2F2F2]/[0.3] rounded-full flex items-center justify-center hover:bg-[#f8409c] hover:text-white transition-all duration-500`}
              ><FaBasketballBall size={18} /></Link>
              <Link href="#"
                className={`p-2 bg-[#F2F2F2]/[0.3] rounded-full flex items-center justify-center hover:bg-[#000] hover:text-white`}
              ><FaTwitter size={18} /></Link>
              <Link href="#"
                className={`p-2 bg-[#F2F2F2]/[0.3] rounded-full flex items-center justify-center hover:bg-[#040301] hover:text-white`}
              ><FaGithub size={18} /></Link>
              <Link href="#"
                className={`p-2 bg-[#F2F2F2]/[0.3] rounded-full flex items-center justify-center hover:bg-[#3a7ff5] hover:text-white`}
              ><FaLinkedin size={18} /></Link>
            </div>

          </div>
        </div>
        <div className="absolute md:relative -right-32 md:-right-5 lg:-right-7 opacity-5 md:opacity-100 -z-10 md:-z-20 h-[250px] w-[200px] md:w-[230px] lg:w-[250px] bottom-0 md:basis-50 hidden">
          <Image src="/me.png" alt="" width="300" height="300" />
        </div>
      </div>
    </div >
  );
}
