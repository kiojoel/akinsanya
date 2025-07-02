"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import type { JSONContent } from "@tiptap/core";

// Tiptap Extensions
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Mathematics from "@tiptap/extension-mathematics";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

// Syntax Highlighting Setup
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

const ContentRenderer = ({ content }: { content: JSONContent }) => {
  const editor = useEditor({
    editable: false,
    content: content,
    extensions: [
      StarterKit,
      Mathematics,
      Image.configure({
        HTMLAttributes: { class: "rounded-lg border border-stone-200" },
      }),
      CodeBlockLowlight.configure({ lowlight }),
    ],
    editorProps: {
      attributes: {
        class: "prose prose-lg dark:prose-invert focus:outline-none max-w-full",
      },
    },
  });

  return <EditorContent editor={editor} />;
};

export default ContentRenderer;
