import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const Header = () => {
    return (
        <div className="sticky top-0  pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
            <Link href="/doc">
                <Button>
                    <ArrowLeft className="h-5 w-5 stroke-2  text-neutral-400" />
                </Button>
            </Link>
        </div>
    );
};
