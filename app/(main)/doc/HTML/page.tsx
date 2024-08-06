import { currentUser } from "@clerk/nextjs/server";
import { getCourses, getUserProgress } from "@/db/queries";
import { Header } from "../header";
import Image from "next/image";
import { StickyWrapper } from "@/components/sticky-wrapper";
import Link from "next/link";
import { FeedWrapper } from "@/components/feed-wrapper";

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
            <Header />
            <section className="flex flex-row-reverse gap-[48px] px-6">
                <StickyWrapper>
                    <h1 className="text-xl">
                        En este artículo:
                    </h1>
                    <nav className="flex flex-col gap-y-3 border-l-2 border-slate-500 pl-6">
                        <ul>
                            <Link 
                                href="#que"
                                className="hover:text-slate-400"
                            >
                                Que es HTML?
                            </Link>
                        </ul>
                        <ul>
                            <Link 
                                href="#que"
                                className="hover:text-slate-400"
                            >
                                Que es HTML?
                            </Link>
                        </ul>
                        <ul>
                            <Link 
                                href="#que"
                                className="hover:text-slate-400"
                            >
                                Que es HTML?
                            </Link>
                        </ul>
                        <ul>
                            <Link 
                                href="#que"
                                className="hover:text-slate-400"
                            >
                                Que es HTML?
                            </Link>
                        </ul>
                        <ul>
                            <Link 
                                href="#que"
                                className="hover:text-slate-400"
                            >
                                Que es HTML?
                            </Link>
                        </ul>
                    </nav>
                </StickyWrapper>
                <FeedWrapper>
                    <div className='flex w-full flex-col items-center'>

                        <h1 className="h-full w-full px-3 mx-auto text-5xl text-center my-4 font-semibold">
                            Guía HTML
                        </h1>

                        <div className="h-full max-w-[912px] px-3 mx-auto">
                            <h1 id="que" className="text-2xl font-bold text-neutral-700 my-4 mt-2">
                                .// Qué es HTML?
                            </h1>
                            <Image 
                                className="mx-auto my-10"
                                src="/html.svg"
                                alt="html"
                                width={300}
                                height={350}
                            />
                            <p>
                                HTML (HyperText Markup Language) is a markup language that tells web browsers how to structure the web pages you visit. It can be as complicated or as simple as the web developer wants it to be. HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of content to make it appear or act in a certain way. The enclosing tags can make content into a hyperlink to connect to another page, italicize words, and so on.
                            </p>
                        </div>
                    </div>
                </FeedWrapper>
            </section>
        </div>
    );
};


export default Documentation
