import BlogPageContent from "@/components/BlogPageContent";
import { notFound } from "next/navigation";


interface Article {
	title: string;
	description: string;
	date: string;
	slug: string;
    body: string;
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function generateStaticParams() {
    const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
    const data = await response.json();
    const posts: Article[] = data.data;

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPage({params} : {params: {slug: string}}) {
    const {slug} = await params;
    const response = await fetch(`${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`);
    const data = await response.json();
    const article: Article = data.data[0];

    if (!article) {notFound(); }

    return (
        <BlogPageContent article={article}/>
    )
}