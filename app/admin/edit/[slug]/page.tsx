import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import EditForm from "../EditForm";

// Define the interface for our Post model
interface Post {
  id: string;
  title: string;
  slug: string;
  overview: string;
  content: any;
  createdAt: string;
}

const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:3000`;
};

async function getPostData(slug: string): Promise<Post | null> {
  const url = `${getBaseUrl()}/api/posts/${slug}`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function EditPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.name !== process.env.ADMIN_GITHUB_USERNAME) {
    redirect("/api/auth/signin/github");
  }

  const post = await getPostData(params.slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Edit Article</h1>
      <EditForm post={post} />
    </main>
  );
}
