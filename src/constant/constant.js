import { FaFigma, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Stacks = [
    { icon: <FaFigma size="35" />, title: 'figma', subTitle: 'UX/UI design/prototype' },
    { icon: <RiNextjsFill size="35" />, title: 'Next.js/React.js', subTitle: 'Frontend development' },
    { icon: <SiTypescript size="35" />, title: 'Typescript/Javascript', subTitle: 'Frontend development' },
    { icon: <TbBrandReactNative size="35" />, title: 'React Native', subTitle: 'Mobile development' },
    { icon: <RiTailwindCssFill size="35" />, title: 'Tailwindcss', subTitle: 'CSS framework' },
    { icon: <FaSass size="35" />, title: 'Sass', subTitle: 'CSS preprocessor' },
];


const Works = [
    { icon: '/work/upwork.png', status: "", company: 'UpWork', role: 'Full-stack Engineer', from: '11/2024', to: 'Present' },
    { icon: '/work/andela.png', status: "", company: 'Andela', role: 'Full-stack Engineer', from: '01 2024', to: '11/2014' },
    { icon: '/work/shuribus.png', status: "Discontinued", company: 'ShuriBus', role: 'Front-end Developer & Cofounder', from: '01/2018', to: '03/2021' },
    { icon: '/work/uplus.png', status: "", company: 'Uplus', role: 'Front-end Developer', from: '08/2017', to: '11/2018' },
    { icon: '/work/klab.png', status: "", company: 'kLab', role: 'Software Engineer Intern', from: '12/2015', to: '12/2016' }
];
export { Stacks, Works }
