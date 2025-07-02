import { getServerSession } from "next-auth";
import { authOptions, isUserAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";
import EditForm from "../EditForm";
import { getPostBySlug } from "@/lib/data";

export default async function EditPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const isAdmin = await isUserAdmin();
  if (!isAdmin) {
    redirect("/admin");
  }

  const post = await getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <p className="mt-4 text-gray-400">
          The requested post could not be found.
        </p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Edit Article</h1>
      <EditForm post={post} />
    </main>
  );
}
