import ContentRenderer from "@/app/components/ContentRenderer";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await getPosts();
  if (!Array.isArray(posts)) {
    return [];
  }
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const contentToRender =
    post.content &&
    typeof post.content === "object" &&
    Object.keys(post.content).length > 0
      ? post.content
      : { type: "doc", content: [] };

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div>
              <p className="text-base font-medium leading-6 text-gray-500">
                {new Date(post.createdAt).toISOString().split("T")[0]}
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg ">
            <ContentRenderer content={contentToRender} />
          </div>
        </div>
      </div>
    </div>
  );
}
