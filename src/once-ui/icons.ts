import { IconType } from 'react-icons';

import {
	HiChevronUp,
	HiChevronDown,
	HiChevronRight,
	HiChevronLeft,
	HiArrowUpRight,
	HiOutlineArrowPath,
	HiCheck,
	HiMiniQuestionMarkCircle,
	HiMiniXMark,
	HiOutlineLink,
	HiExclamationTriangle,
	HiInformationCircle,
	HiExclamationCircle,
	HiCheckCircle,
	HiMiniGlobeAsiaAustralia,
	HiEnvelope,
	HiCalendarDays,
	HiClipboard,
	HiSun,
	HiMoon
} from "react-icons/hi2";

import {
	PiHouseDuotone,
	PiUserCircleDuotone,
	PiGridFourDuotone,
	PiBookBookmarkDuotone,
	PiImageDuotone,
	PiCodeDuotone,
	PiBracketsCurlyDuotone,
	PiBrainDuotone,
	PiTranslateDuotone
} from "react-icons/pi";

import {
	FaDiscord,
	FaGithub,
	FaLinkedin,
	FaXTwitter
} from "react-icons/fa6";

import {
	SiReact,
	SiTypescript,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiSass,
	SiLess,
	SiBootstrap,
	SiGit,
	SiPhp,
	SiFigma,
	SiAdobephotoshop,
	SiRedux,
	SiVuedotjs,
	SiLaravel,
	SiTailwindcss,
	SiNextdotjs,
	SiNodedotjs,
	SiMysql,
	SiMongodb
} from "react-icons/si";

export const iconLibrary: Record<string, IconType> = {
	chevronUp: HiChevronUp,
    chevronDown: HiChevronDown,
	chevronRight: HiChevronRight,
	chevronLeft: HiChevronLeft,
	refresh: HiOutlineArrowPath,
	arrowUpRight: HiArrowUpRight,
	check: HiCheck,
	helpCircle: HiMiniQuestionMarkCircle,
	infoCircle: HiInformationCircle,
	warningTriangle: HiExclamationTriangle,
	errorCircle: HiExclamationCircle,
	checkCircle: HiCheckCircle,
	email: HiEnvelope,
	globe: HiMiniGlobeAsiaAustralia,
	person: PiUserCircleDuotone,
	grid: PiGridFourDuotone,
	book: PiBookBookmarkDuotone,
	close: HiMiniXMark,
	openLink: HiOutlineLink,
	calendar: HiCalendarDays,
	home: PiHouseDuotone,
	gallery: PiImageDuotone,
	discord: FaDiscord,
	github: FaGithub,
	linkedin: FaLinkedin,
	x: FaXTwitter,
	clipboard: HiClipboard,
	
	// Technology Icons
	react: SiReact,
	redux: SiRedux,
	typescript: SiTypescript,
	javascript: SiJavascript,
	html5: SiHtml5,
	css3: SiCss3,
	sass: SiSass,
	less: SiLess,
	bootstrap: SiBootstrap,
	git: SiGit,
	php: SiPhp,
	figma: SiFigma,
	photoshop: SiAdobephotoshop,
	vue: SiVuedotjs,
	laravel: SiLaravel,
	tailwind: SiTailwindcss,
	nextjs: SiNextdotjs,
	node: SiNodedotjs,
	mysql: SiMysql,
	mongodb: SiMongodb,
	
	// Concept Icons
	code: PiCodeDuotone,
	curlyBrackets: PiBracketsCurlyDuotone,
	brain: PiBrainDuotone,
	translate: PiTranslateDuotone,

	// Theme Icons
	sun: HiSun,
	moon: HiMoon
};