import { useRef } from "react";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Skills } from "./Skills";
import { AiFillHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills, GiSmartphone, GiCarKey } from "react-icons/gi";
import { MdContactMail, MdElectricBolt } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import axios, { Axios } from "axios";
import i18n from "../i18n";
import { useTranslation, Trans } from "react-i18next";

import { GrCpu } from "react-icons/gr";

const langs: string | any = {
	en: { nativeName: "English" },
	pl: { nativeName: "polski" },
};

export const Navbar = () => {
	const { t, i18n } = useTranslation();

	const scrollRef = useRef<HTMLDivElement>(null);
	const location = useLocation();

	useEffect(() => {
		const savedScrollX = sessionStorage.getItem("scrollX");
		if (scrollRef.current && savedScrollX) {
			scrollRef.current.scrollLeft = parseInt(savedScrollX, 10);
		}
	}, [location]); //

	const handleClick = () => {
		if (scrollRef.current) {
			sessionStorage.setItem("scrollX", scrollRef.current.scrollLeft.toString());
		}
	};

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
		}
	};





	return (
		<div className="sticky top-0 backdrop-blur-sm bg-gradient-to-r from-black/70 to-white w-full h-[60px] shadow-xl shadow-green z-[100] flex items-center">
			{/* Strzałka w lewo */}
			<button
				className="p-2 text-white sm:hidden"
				onClick={scrollLeft}
			>
				◀
			</button>

			{/* Pasek ikon */}
			<div
				className="w-full flex items-center px-2 sm:justify-around  overflow-x-auto sm:overflow-visible scrollbar-hide scroll-smooth"
				ref={scrollRef}
			>
				<Link to="/" onClick={handleClick} className="mx-2">
					<AiFillHome size={29} style={{ color: "white" }} />
				</Link>
				<Link to="/o" onClick={handleClick} className="mx-2">
					<FaUserAlt size={25} style={{ color: "white" }} />
				</Link>
				<Link to="/umiejetnosci" onClick={handleClick} className="mx-2">
					<VscTools size={27} style={{ color: "white" }} />
				</Link>
				<Link to="/contact" className="mx-2">
					<MdContactMail size={34} style={{ color: "white" }} />
				</Link>
				<Link to="/project" onClick={handleClick} className="mx-2">
					<AiOutlineFundProjectionScreen size={34} style={{ color: "white" }} />

				</Link>
				<Link to="/keys" onClick={handleClick} className="mx-2">
					<GiCarKey size={34} style={{ color: "#767a76" }}  />
				</Link>
				<Link to="/microcontroler" onClick={handleClick} className="mx-2">
					<GrCpu size={34} style={{ color: "#767a76" }} />
				</Link>
				<Link to="/electronic" onClick={handleClick} className="mx-2">
					<MdElectricBolt size={34} style={{ color: "#767a76" }} />
				</Link>
				<Link to="/smartfone" onClick={handleClick} className="mx-2">
					<GiSmartphone size={34} style={{ color: "#767a76" }} />
				</Link>
			</div>

			{/* Strzałka w prawo */}
			<button
				className="p-2 text-slate-400 sm:hidden"
				onClick={scrollRight}
			>
				▶
			</button>
		</div>
	);
};
