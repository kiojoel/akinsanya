import { prisma } from "@/lib/prisma";

interface Post {
  id: string;
  title: string;
  slug: string;
  overview: string;
  content: any;
  createdAt: Date;
}

export async function getPosts(): Promise<Post[]> {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = await prisma.post.findUnique({
    where: { slug },
  });
  return post;
}