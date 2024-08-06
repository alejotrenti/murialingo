"use client";

import { courses } from "@/db/schema";
import { Card } from "./card";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props={
    courses: typeof courses.$inferSelect[];
};

export const List = ({ courses }: Props) =>{
    const [pending, startTransition] = useTransition();

    const onClick = (id:number) => {
        if(pending) return;


        startTransition(()=>{
            upsertUserProgress(id)
            .catch(() => toast.error("Something went wrong"));
        });
    };

    return (
        <div className="pt-4 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
                <Card 
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    onClick={`/doc/${course.title}`}
                />
            ))}
        </div>
    );
};