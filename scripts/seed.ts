import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, {schema});

const main = async() =>{
    try{
        console.log("seeding database");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                id:1,
                title:"HTML",
                imageSrc:"/html.svg",
            },
            {
                id:2,
                title:"CSS",
                imageSrc:"/css.svg",
            },
            {
                id:3,
                title:"JavaScript",
                imageSrc:"/js.svg",
            },
            {
                id:4,
                title:"Python",
                imageSrc:"/python.svg",
            },
            {
                id:5,
                title:"SQL",
                imageSrc:"/sql.svg",
            },
        ]);

        await db.insert(schema.units).values([
            {
                id:1,
                courseId:1, //HTML
                title:"Unit 1",
                description:"Learn the basics of HTML",
                order:1,
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id:1,
                unitId:1, //UNIT1
                order:1,
                title:"Introduction",
            },
            {
                id:2,
                unitId:1, //UNIT1
                order:2,
                title:"Text Formatting and Links",  
            },
            {
                id:3,
                unitId:1, //UNIT1
                order:3,
                title:"Text Formatting and Links",  
            },
            {
                id:4,
                unitId:1, //UNIT1
                order:4,
                title:"Text Formatting and Links",  
            },
            {
                id:5,
                unitId:1, //UNIT1
                order:5,
                title:"Text Formatting and Links",  
            },
        ]);


        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId:1, // INTRODUCTION
                type:"SELECT",
                order:1,
                question:"What does HTML stand for?"
            },
        ]);

        await db.insert(schema.challengeOptions).values([
            {
                id:1,
                challengeId:1,
                correct:true,
                text:"HyperText Markup Language.",
                //imageSrc: "html.svg",
                //audioSrc:"/html.mp3"
            },
            {
                id:2,
                challengeId:1,
                correct:false,
                text:"Hyperlinks and Text Marking Language.",
            },
            {
                id:3,
                challengeId:1,
                correct:false,
                text:"Home Tool Markup Language.",
            },
        ]);

        console.log("Seeding finished");
    }catch(error){
        console.error(error);
        throw new Error("Failed to seed the database")
    }
};

main();