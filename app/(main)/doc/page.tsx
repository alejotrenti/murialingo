import { currentUser } from "@clerk/nextjs/server";
import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
import Image from "next/image";

const Documentation = async () => {
    const user = await currentUser();

    const coursesData =  getCourses();
    const userProgressData =  getUserProgress();

    const[
        courses,
        userProgress,
    ] = await Promise.all([
        coursesData,
        userProgressData,
    ]);

    return (
        <div>
            <section className="w-full flex flex-col justify-center h-full max-w-[912px]">
                <h1 className=" px-3 mx-auto text-5xl lg:text-6xl text-center my-7 font-semibold">
                    Necesitas ayuda?
                </h1>
                <h2 className=" px-3 mx-auto text-center mb-20">
                    No te preocupes, <span className="italic">{user?.firstName}</span>. Aquí llegamos nosotros a ayudarte!
                </h2>
                <div className="px-3">
                    <h1 className="text-2xl font-bold my-4 mt-2">
                        En que necesitas ayuda?
                    </h1>
                    <List 
                        courses={courses}
                    />
                </div>
            </section>
        </div>
    );
};


export default Documentation
