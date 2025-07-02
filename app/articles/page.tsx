import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getPosts } from "@/lib/data";
import DeleteButton from "../components/DeleteButton";

export default async function Article() {
  // Call the database directly! No more fetch.
  const data = await getPosts();

  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.name === process.env.ADMIN_GITHUB_USERNAME;

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Articles
        </h1>
      </div>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="py-4">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <div>
                <p className="text-base font-medium leading-6 text-gray-500">
                  {new Date(post.createdAt).toISOString().split("T")[0]}
                </p>
              </div>
              <div className="space-y-3 xl:col-span-3">
                <Link href={`/post/${post.slug}`} prefetch className="block space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      {post.title}
                    </h3>
                  </div>
                  <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    {post.overview}
                  </p>
                </Link>
                {isAdmin && (
                  <div className="flex items-center space-x-4 pt-2">
                    <Link href={`/admin/edit/${post.slug}`} className="text-sm font-medium text-blue-500">
                      Edit
                    </Link>
                    <DeleteButton slug={post.slug} />
                  </div>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}