import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { 
    ClerkLoading,
    ClerkLoaded,
    UserButton,
} from "@clerk/nextjs";

import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { GoGear } from "react-icons/go";
import { DropUp } from "./dropup";

type Props = {
    className?: string;
};

export const Sidebar = ({ className }: Props) => {
    return(
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className,
            )}>
            <Link href="/">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/file.png" height={40} width={40} alt="logo" />
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
                        MuriaLingo
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                    label="Aprende" 
                    href="/learn"
                    iconSrc="/learn.png"
                />
                <SidebarItem 
                    label="Marcador" 
                    href="/leaderboard"
                    iconSrc="/leaderboard.png"
                />
                <SidebarItem 
                    label="Tareas" 
                    href="/quests"
                    iconSrc="/quests.png"
                />
                <SidebarItem 
                    label="Tienda" 
                    href="/shop"
                    iconSrc="/shop.png"
                />
            </div>
            <SidebarItem 
                    className=""
                    label="Ayuda" 
                    href="/doc"
                    iconSrc="/doc.png"
            />
            <div className="p-4 inline-flex justify-between gap-y-6">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>
                
                <DropUp />
            </div>
        </div>
    );
};