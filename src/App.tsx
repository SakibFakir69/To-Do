import React, { Children, useEffect, useRef, useState } from "react";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import ToolBox from "./components/ToolBox";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import Italic from "@tiptap/extension-italic";

function App() {
  const useText = useRef<null>(null);

  const [text, settext] = useState<string>("<p>start typeing here</p>");

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false, // disable default bold to use custom one
      }),
      Bold,
      Color,
      TextStyle,
      TextStyle,
      Color,
      Highlight,
      Italic,
    ],
    content: `

   
      `,
  });

  useEffect(() => {
    if (editor && text) {
      editor.commands.setContent(text);
    }
  }, [text, editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="bg-stone-100 min-h-screen">
      <header>
        <ToolBox editor={editor} />
      </header>

      <div className="w-[794px] bg-white mx-auto shadow-lg p-12 mt-20">
        <div className="">

          <EditorContent
            editor={editor}
            className="w-full border min-h-[660px] border-none outline-none "
          />
          
        </div>
      </div>
    </div>
  );
}

export default App;
