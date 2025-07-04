// FILE: lib/data.ts

// Define the interface for a Post to be used in our functions
interface Post {
  id: string;
  title: string;
  slug: string;
  overview: string;
  content: any;
  createdAt: string;
}

const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return `https://akinsanya.vercel.app`;
  return `http://localhost:3000`;
};

export async function getPosts(): Promise<Post[]> {
  const url = `${getBaseUrl()}/api/posts`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const url = `${getBaseUrl()}/api/posts/${slug}`;

  const res = await fetch(url, { cache: "no-store" });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}
