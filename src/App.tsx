import React, { Children, useEffect, useRef, useState } from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";

function App() {
  const useText = useRef<null>(null);

  const [text, settext] = useState<string>("<p>start typeing here</p>");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false, // disable default bold to use custom one
      }),
      Bold,
    ],
    content: `

   
      `,
  });

  useEffect(() => {
    if (editor && text) {
      editor.commands.setContent(text );
    }
  }, [text, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="">
     
     <header className="flex gap-10 fixed bg-green-200 w-full ">
      <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
        >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
        >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          Code block
        </button>
     </header>

     

      <div className="w-[794px] h-[1123px] bg-stone-400 mx-auto shadow-lg p-12 mt-20">
        <div className="h-screen">
          
        <EditorContent editor={editor} className="w-full border h-screen" />
        </div>
        <h1></h1>


      </div>
    </div>
  );
}

export default App;
