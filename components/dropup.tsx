"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { GoGear } from "react-icons/go";
import Link from "next/link";
import { ThemeButton } from "./theme-btn";

export const DropUp = () => {
    const [open, setOpen] = useState(false);

    const toggleDropup = () => {
        setOpen((open) => !open);
    };

    return (
        <div className="relative inline-block">
            <Button 
                size="icon"
                variant="sidebar"
                open={open}
                onClick={toggleDropup}
            >
                <GoGear className="text-2xl" />
            </Button>
            {open && (
                <div className="absolute bottom-full left-0 mb-2 rounded-xl shadow-lg animate-dropup">
                    <ul className="list-none m-0 p-0 bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 dark:bg-[#020817] dark:text-white dark:border-[#1E293B] dark:hover:bg-[#334155] ">
                        <li className="px-2 border-b-2">
                            <ThemeButton/>
                        </li>
                        <li className="px-2">
                            <Button
                                className="w-full"
                                variant="sidebar"
                            >
                                <Link
                                    href="/about"
                                >
                                 Sobre nosotros
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
