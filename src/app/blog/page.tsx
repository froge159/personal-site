"use client";

import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { motion } from "motion/react";
import {satoshiMedium} from "../../components/fonts";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";

interface Article {
	title: string;
	description: string;
	date: string;
	slug: string;
}

const MemoizedBlogCard = memo(BlogCard);

export default function Blog() {
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

    const fetchArticles = async () => {
		const data = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
		if (data.ok) {
		  const response = await data.json();
          response.data.sort((a: Article, b: Article) => new Date(b.date).getTime() - new Date(a.date).getTime());
		  return response;
		} else {
		  console.error('Failed to fetch articles:', data.statusText);
		}
	};
	
	const {data, isLoading} = useQuery({queryKey: ["articles"], queryFn: fetchArticles});
    
	if (isLoading) return <div></div>
    
    

    return (
        <motion.div initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.3}}>
            <Navbar text="home"/>
            <div className="relative top-[140px] left-[7.7vw]">
                <h3 className={`${satoshiMedium.variable} font-medium`}>all blogs</h3>
                <ul className="mt-5">
                    {data?.data?.map((article: Article) => {
                        return <div key={article.slug} className="mb-8"><MemoizedBlogCard title={article.title} desc = {article.description} date = {article.date}  slug={article.slug}/></div>
                    })}
                </ul>
            </div>
            
        </motion.div>
    )
}
