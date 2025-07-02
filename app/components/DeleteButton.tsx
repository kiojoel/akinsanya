"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ slug }: { slug: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    // Show a browser confirmation dialog before proceeding
    if (
      window.confirm(
        "Are you sure you want to delete this post? This cannot be undone."
      )
    ) {
      try {
        const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" });

        if (!res.ok) {
          throw new Error("Failed to delete the post.");
        }

        // On success, refresh the page to show the updated list of articles
        router.refresh();
      } catch (error: any) {
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-sm font-medium text-red-500 hover:text-red-700 dark:hover:text-red-400"
    >
      Delete
    </button>
  );
}
