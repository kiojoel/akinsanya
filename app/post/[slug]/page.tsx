/* import { Post } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 60;

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          className="rounded-lg mx-auto"
          width={800}
          height={800}
          style={{ width: "auto", height: "auto" }}
        />
      ),
    },
  };

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div className="space-y-10">
            <div>
              <p className="text-base font-medium leading-6 text-gray-500">
                {new Date(data._createdAt).toISOString().split("T")[0]}
              </p>
            </div>
          </div>

          <div>
            <h1
              className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl
             md:leading-14"
            >
              {data.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg ">
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
 */

// app/post/[slug]/page.tsx
// NOTE: The original file was a duplicate of the articles list.
// This is the correct structure for a single post page.

// app/post/[slug]/page.tsx
import ContentRenderer from "@/app/components/ContentRenderer";
import { notFound } from "next/navigation";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: any;
  createdAt: string;
}

const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:3000`;
};

async function getData(slug: string): Promise<Post> {
  const url = `${getBaseUrl()}/api/posts/${slug}`;
  const res = await fetch(url, { cache: "no-store" });
  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

// Generate static pages for SEO and performance
export async function generateStaticParams() {
  const url = `${getBaseUrl()}/api/posts`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];

    const posts = (await res.json()) as Post[];

    // This will now work correctly because the 'Post' interface has 'slug'
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getData(params.slug);

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
            <h1
              className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl
             md:leading-14"
            >
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg ">
            <ContentRenderer content={post.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
