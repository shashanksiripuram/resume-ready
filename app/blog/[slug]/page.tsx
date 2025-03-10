"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { BlogArticle } from "@/types/blogpost";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

async function getPosts() {
  const response = await axios.get(
    "https://679e58cf946b0e23c0633355.mockapi.io/blogposts"
  );
  return response.data;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [blogpost, setBlogpost] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const posts = await getPosts();
        // setting timeout
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const post = posts.find((p: BlogArticle) => p.slug === params.slug);
        if (!post) {
          notFound();
        } else {
          setBlogpost(post);
        }
      } catch (error) {
        notFound();
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [params.slug]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/blog"
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to articles
      </Link>

      {loading ? (
          <div className="h-[600px] animate-pulse space-y-8">
            <div className="space-y-3">
              <div className="h-6 bg-muted rounded w-full"></div>
              <div className="h-6 bg-muted rounded w-full"></div>
              <div className="h-6 bg-muted rounded w-full"></div>
              <div className="h-6 bg-muted rounded w-3/4"></div>
            </div>
            <div className="flex justify-start items-center gap-2">
              <div className="h-4 bg-muted rounded w-1/6"></div>
              <div className="h-4 bg-muted rounded w-1/6"></div>
              <div className="h-4 bg-muted rounded w-1/6"></div>
            </div>
            <div className="space-y-3">
            {[...Array(10)].map((_, i) => (
              <div className="h-4 bg-muted rounded w-full"></div>
            ))}
            </div>
          </div>
      ) : blogpost ? (
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{blogpost.title}</h1>
          <div className="flex gap-2 text-sm text-muted-foreground mb-8">
            <span>Article</span>
            {"•"}
            <span>{new Date(blogpost.date).toLocaleDateString()}</span>
            {"•"}
            <span>{blogpost.readTime} min read</span>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            {blogpost.content}
          </div>
        </article>
      ) : null}
    </div>
  );
}
