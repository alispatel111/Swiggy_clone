import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(!toggle);
    }

    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <IoIosSearch />,
            name: "search"
        },
        {
            icon: <RiDiscountPercentLine />,
            name: "offers",
            sup: "New"
        },
        {
            icon: '',
            name: "help"
        },

        {
            icon: '',
            name: "sign in"
        },

        {
            icon: '',
            name: "cart",
            sup: "(10)"
        }
    ];

    return (
        <>
            <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden",
                zIndex:999
            }}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className="w-[500px] bg-white h-full absolute duration-[400ms]" style={{
                    left: toggle ? '0%' : '-100%'
                }}>
                </div>
            </div>
            <header className="p-3 shadow-xl text-[#989b78] sticky top-0 bg-white z-[9999]">
                <div className="max-w-[1200px] mx-auto flex items-center">
                    <div className="w-[100px]">
                        <img src="images/logo.png" className="w-full" alt="Logo" />
                    </div>
                    <div>
                        <span className="font-bold border-b-[3px] ">
                            Ranoli
                        </span>{" "}
                        Vadodara, Gujarat, India
                        <RxCaretDown fontSize={25} className="font-bold inline text-[#fc8019] cursor-pointer" onClick={showSideMenu} />
                    </div>
                    <nav className="flex list-none gap-10 ml-auto font-semibold text-[18px]">
                        {links.map((link, index) => (
                            <li key={index} className="cursor-pointer flex items-center gap-2 hover:text-[#fc8019]">
                                {link.icon}
                                {link.name}
                                <sup>{link.sup}</sup>
                            </li>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}
