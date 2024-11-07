"use client"

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { GoGear } from "react-icons/go";
import Link from "next/link";
import { ThemeButton } from "./theme-btn";

export const DropUp = () => {
    const [open, setOpen] = useState(false);
    const dropupRef = useRef<HTMLDivElement>(null); // Especifica el tipo HTMLDivElement

    const toggleDropup = () => {
        setOpen((open) => !open);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropupRef.current && 
            !dropupRef.current.contains(event.target as Node) // Asegura el tipo de event.target
        ) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={dropupRef}>
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
                    <nav className="list-none m-0 p-0 bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 dark:bg-[#020817] dark:text-white dark:border-[#1E293B] ">
                        <div className="px-2 border-b-2 dark:hover:bg-[#334155] hover:bg-slate-100">
                            <ThemeButton/>
                        </div>
                        <div className="px-2 dark:hover:bg-[#334155] hover:bg-slate-100">
                            <Button className="w-full" variant="ghost">
                                <Link href="/about">Sobre nosotros</Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
};
