"use client";

import { useEffect, useState } from "react";
import { EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Image as ImageIcon,
} from "lucide-react";

export default function MinimalEditor() {
  const [editor, setEditor] = useState<Editor | null>(null);

  useEffect(() => {
    const instance = new Editor({
      extensions: [
        StarterKit,
        Underline,
        Image,
        Link.configure({ openOnClick: false }),
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
      ],
    });

    setEditor(instance);

    return () => instance.destroy();
  }, []);

  const addImage = () => {
    const url = prompt("لینک تصویر را وارد کنید:");
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="bg-white border size-full border-gray-200 rounded shadow-sm">
      {/* نوار ابزار */}
      <div className="flex flex-wrap items-center gap-2 p-2 border-b bg-gray-100 rounded-t">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className="btn btn-xs"
        >
          <Bold className="size-4" />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className="btn btn-xs"
        >
          <Italic className="size-4" />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          className="btn btn-xs"
        >
          <UnderlineIcon className="size-4" />
        </button>

        <button onClick={addImage} className="btn btn-xs">
          <ImageIcon className="size-4" />
        </button>
      </div>

      {/* ادیتور */}
      <div className="p-3 min-h-[200px] outline-0">
        {editor ? (
          <EditorContent editor={editor} className="editor-content" />
        ) : (
          <p className="text-gray-200 text-sm">در حال بارگذاری ویرایشگر...</p>
        )}
      </div>
    </div>
  );
}