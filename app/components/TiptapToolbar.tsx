// FILE: app/components/TiptapToolbar.tsx
"use client";

import type { Editor } from "@tiptap/react";
import React from "react";

// --- Button configuration for standard commands ---
const commandButtons = [
  { command: "toggleBold", icon: "B", label: "Bold" },
  { command: "toggleItalic", icon: "I", label: "Italic" },
  { command: "toggleStrike", icon: "S", label: "Strikethrough" },
  { command: "toggleCodeBlock", icon: "</>", label: "Code Block" },
];

// --- THE FIX: Make onImageUpload optional by adding a '?' ---
export default function TiptapToolbar({ editor, onImageUpload }: { editor: Editor | null; onImageUpload?: (file: File) => Promise<string | null>; }) {
  if (!editor) {
    return null;
  }

  const handleImageButtonClick = () => {
    // We only call this if onImageUpload exists, so we add a check
    if (!onImageUpload) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length) {
        const file = target.files[0];
        const url = await onImageUpload(file);
        if (url) {
          editor.chain().focus().setImage({ src: url }).run();
        }
      }
    };
    input.click();
  };

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-t-lg border-b border-stone-400 bg-gray-100 p-2 dark:border-stone-700 dark:bg-stone-900">
      {/* --- Render standard command buttons --- */}
      {commandButtons.map(({ command, icon, label }) => (
        <button
          key={command}
          onClick={(e) => { e.preventDefault(); (editor.chain().focus() as any)[command]().run(); }}
          disabled={!(editor.can() as any)[command]()}
          className={`font-bold p-2 rounded-md h-9 w-9 flex items-center justify-center ${ editor.isActive(command.replace('toggle', '').toLowerCase()) ? "bg-sky-500 text-white" : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200" } hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed`}
          aria-label={label}
          type="button"
        >
          {icon}
        </button>
      ))}


      {onImageUpload && (
        <button
          onClick={(e) => { e.preventDefault(); handleImageButtonClick(); }}
          className="font-bold p-2 rounded-md h-9 w-9 flex items-center justify-center bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Add Image"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06l2.75-2.75a.75.75 0 0 1 1.06 0l1.97 1.97a.75.75 0 1 0 1.06-1.06l-1.97-1.97a2.25 2.25 0 0 1 3.18 0l1.97 1.97a.75.75 0 1 0 1.06-1.06l-1.97-1.97a2.25 2.25 0 0 1 3.18 0l2.75 2.75V6H3v10.06Z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </div>
  );
}