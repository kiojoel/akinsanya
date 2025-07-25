"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import type { JSONContent } from "@tiptap/core";
import TiptapToolbar from "@/app/components/TiptapToolbar";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Mathematics from "@tiptap/extension-mathematics";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Link from "@tiptap/extension-link";
import { createLowlight } from "lowlight";
import ts from "highlight.js/lib/languages/typescript";
import js from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import python from "highlight.js/lib/languages/python";
import html from "highlight.js/lib/languages/xml";

const lowlight = createLowlight();
lowlight.register("ts", ts);
lowlight.register("js", js);
lowlight.register("css", css);
lowlight.register("python", python);
lowlight.register("html", html);

export default function WriteForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [content, setContent] = useState<JSONContent | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (file: File) => {
    if (!file) return null;
    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
        headers: { "content-type": file.type || "application/octet-stream" },
      });
      if (!response.ok) throw new Error("Upload failed");
      const newBlob = await response.json();
      return newBlob.url;
    } catch (error) {
      console.error("Error uploading image: ", error);
      alert("Error uploading image.");
      return null;
    }
  };

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Mathematics,
      Image.configure({
        HTMLAttributes: { class: "rounded-lg border border-stone-200" },
      }),
      CodeBlockLowlight.configure({ lowlight }),
      Link.configure({ openOnClick: false, autolink: true }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getJSON());
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || !editor?.getText()) {
      alert("Content cannot be empty.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, overview, content }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to save post");
      }
      const post = await res.json();
      alert("Post saved successfully!");
      router.refresh();
      router.push(`/post/${post.slug}`);
    } catch (error: any) {
      console.error(error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title and Overview fields */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-300"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white"
          required
        />
      </div>
      <div>
        <label
          htmlFor="overview"
          className="block text-sm font-medium text-gray-300"
        >
          Overview (Summary)
        </label>
        <textarea
          id="overview"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Content
        </label>
        <div className="rounded-lg border border-stone-400 bg-white shadow-lg dark:border-stone-700 dark:bg-stone-900">
          <TiptapToolbar editor={editor} onImageUpload={handleImageUpload} />
          <EditorContent editor={editor} />
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Saving..." : "Save Post"}
      </button>
    </form>
  );
}
