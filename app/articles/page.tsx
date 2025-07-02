import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DeleteButton from "../components/DeleteButton";

// Define the interface for our new Post model
interface Post {
  id: string;
  title: string;
  slug: string;
  overview: string;
  createdAt: string;
}

// A utility to get the base URL
const getBaseUrl = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:3000`; // dev
};

async function getData() {
  const url = `${getBaseUrl()}/api/posts`;
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  return res.json();
}

export default async function Article() {
  const data = (await getData()) as Post[];
  // Securely get the user session on the server
  const session = await getServerSession(authOptions);
  // Check if the current user is the admin
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

              {/* This container holds the post link and the admin controls */}
              <div className="space-y-3 xl:col-span-3">
                <Link
                  href={`/post/${post.slug}`}
                  prefetch
                  className="block space-y-3"
                >
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-primary-500">
                      {post.title}
                    </h3>
                  </div>
                  <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    {post.overview}
                  </p>
                </Link>

                {/* --- ADMIN CONTROLS --- */}
                {/* This block will only render if you are the admin */}
                {isAdmin && (
                  <div className="flex items-center space-x-4 pt-2">
                    <Link
                      href={`/admin/edit/${post.slug}`}
                      className="text-sm font-medium text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                    >
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
