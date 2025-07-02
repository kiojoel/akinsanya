import { prisma } from "./prisma";
import type { JSONContent } from "@tiptap/core";

export interface Post {
  id: string;
  slug: string;
  title: string;
  overview: string;

  content: JSONContent | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export async function getPosts(): Promise<Post[]> {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    // Cast the result to our more specific Post[] type
    return posts as Post[];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts.");
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const post = await prisma.post.findUnique({
      where: { slug: slug },
    });
    // Cast the result to our more specific Post type
    return post as Post | null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch post.");
  }
}
